'use strict'

const appInsights = require('applicationinsights')
const appInsightsKey = process.env.APPINSIGHTS_INSTRUMENTATION_KEY || false

function middleware (req, res, next) {
	if (appInsightsKey) {
		appInsights.setup(appInsightsKey).start()
		appInsights.defaultClient.trackNodeHttpRequest({
			request: req,
			response: res
		})
	}
	next()
}

module.exports = middleware