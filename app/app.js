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

let app = express()

// --- Middleware ---

app.use(forceHttps)
app.use(helmet())
app.use(logger('dev'))
app.use(monitor)

// --- Views ---

app.use(express.static(path.join(__dirname, './../assets')))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'hbs')
app.set('view options', { layout: 'layout' })

app.get('/', (req, res) => {
	res.render('home', {
		title: 'Node.js on Azure Demo',
		version: 'v' + process.env.npm_package_version
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
	includeEnv: ['WEBSITE_HOSTNAME', 'WEBSITE_INSTANCE_ID']
}))

app.use((req, res, next) => {
  res.status(404).send('Oops - page not found.')
})

module.exports = app
