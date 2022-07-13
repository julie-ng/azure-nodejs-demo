'use strict'

// eslint-disable-next-line no-unused-vars
const hbs  = require('express-handlebars')
const express = require('express')
const path = require('path')
const helmet = require('helmet')
const logger = require('morgan')
const monitor = require('./middleware/monitor')
const forceHttps = require('./middleware/force-https')
const bodyParser = require('body-parser')
const healthcheck = require('standard-healthcheck')

const packageJsonVersion = require('./../package.json').version

const PORT = process.env.PORT || '3000'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
const APP_VERSION = IS_PRODUCTION
	? 'v-' + packageJsonVersion
	: 'dev'

const AZURE_APP_SERVICE_HOSTNAME = process.env.WEBSITE_HOSTNAME
	? `https://${process.env.WEBSITE_HOSTNAME}`
	: false

const ASSETS_BASE_URL = process.env.ASSETS_BASE_URL
	|| AZURE_APP_SERVICE_HOSTNAME
	|| `http://localhost:${PORT}`

let app = express()


// --- Static Assets ---

const assetsDir = path.join(__dirname, './../assets')
const cssFile = IS_PRODUCTION
	? `styles-${packageJsonVersion}.css`
	: 'styles.css'
const cssFileUrl = `${ASSETS_BASE_URL}/css/${cssFile}`

app.use('/css', express.static(`${assetsDir}/css`))
app.use('/images', express.static(`${assetsDir}/images`))

// --- Middleware ---

app.use(forceHttps)
app.use(helmet())
app.use(logger('dev'))
app.use(monitor)

// --- Views ---

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layout' })

app.get('/', (req, res) => {
	res.render('home', {
		title: 'Node.js on Azure App Service Demo',
		version: APP_VERSION,
		cssFileUrl: cssFileUrl,
		assetsBaseUrl: ASSETS_BASE_URL
	})
})

app.post('/webhooks/test', bodyParser.json(), (req, res) => {
	let payload = {
		status:  'OK',
		payload: {
			headers: req.headers,
			body: req.body
		}
	}
	console.log(payload)
	res.send(JSON.stringify(payload))
})

app.get('/health', healthcheck({
	version: process.env.npm_package_version,
	description: process.env.npm_package_description,
	includeEnv: ['WEBSITE_HOSTNAME', 'WEBSITE_INSTANCE_ID', 'ASSETS_BASE_URL', 'NODE_ENV']
}))

app.use((req, res, next) => {
  res.status(404).send('Oops - page not found.')
})

module.exports = app
