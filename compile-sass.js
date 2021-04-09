'use strict'

const fs = require('fs')
const path = require('path')
const sass = require('sass')

const appVersion = process.env.npm_package_version

const sourceFile = path.join(__dirname, 'assets/css/styles.scss')
const outFile = path.join(__dirname, `assets/css/styles.css`)
const outFileVersioned = path.join(__dirname, `assets/css/styles-${appVersion}.css`)
const opts = {
	file: sourceFile,
	outputStyle: 'compressed'
}

sass.render(opts, function (err, result) {
	if (result) {
		const css = result.css.toString()
		console.log('[Compiled CSS]')
		console.log(css)

		// Always write styles.css
		fs.writeFileSync(outFile, css)
		console.log('[Created] styles.css')

		// Only write versioned file if doesn't exist
		try {
			fs.writeFileSync(outFileVersioned, css, { flag: 'wx' })
			console.log(`[Created] styles-${appVersion}.css`)
		} catch (e) {
			console.log(`[Skipped] styles-${appVersion}.css already exists`)
		}
		process.exit(0)
	}

	if (err) {
		console.error('Error: could not compile sass:')
		console.log(err)
	}

	process.exit(1)
})
