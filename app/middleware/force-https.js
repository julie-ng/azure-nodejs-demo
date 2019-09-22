'use strict'

function isDeployed () {
	return process.env.NODE_ENV !== 'development' && process.env.NODE_ENV !== 'test'
}

function https (req, res, next) {
	if (!req.secure && req.get('X-Forwarded-Proto') !== 'https' && isDeployed()) {
    res.redirect('https://' + req.hostname + req.url)
  } else {
		next()
	}
}

module.exports = https