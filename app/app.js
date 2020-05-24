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

const PORT = process.env.PORT || '3000'
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
const AZURE_APP_SERVICE_HOSTNAME = process.env.WEBSITE_HOSTNAME
	? `https://${process.env.WEBSITE_HOSTNAME}`
	: false
const ASSETS_BASE_URL = process.env.ASSETS_BASE_URL
	|| AZURE_APP_SERVICE_HOSTNAME
	|| `http://localhost:${PORT}`

let app = express()

// --- Static Assets ---

const assetsDir = path.join(__dirname, './../assets')
const cssFile = IS_DEVELOPMENT
	? 'styles.css'
	: `styles-${process.env.npm_package_version}.css`
const cssFileUrl = `${ASSETS_BASE_URL}/css/${cssFile}`

if (IS_DEVELOPMENT) {
	const sassMiddleware = require('node-sass-middleware')
	app.use(sassMiddleware({
		src: `${assetsDir}/css`,
		dest: `${assetsDir}/css`,
		debug: true,
		outputStyle: 'compressed',
		prefix:  '/css'
	}))
}

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
		title: 'Node.js on Azure Demo',
		version: 'v' + process.env.npm_package_version,
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
