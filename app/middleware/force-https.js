function https (req, res, next) {
	if (!req.secure && req.get('X-Forwarded-Proto') !== 'https' && process.env.NODE_ENV !== 'development') {
    res.redirect('https://' + req.hostname + req.url)
  } else {
		next()
	}
}

module.exports = https