const fs = require('fs')
const path = require('path')
const sass = require('node-sass')

const appVersion = process.env.npm_package_version

const sourceFile = path.join(__dirname, 'css/styles.css')
const outFile = path.join(__dirname, `css/styles-${appVersion}.css`)
const opts = {
	file: sourceFile,
	outputStyle: 'compressed'
}

sass.render(opts, function (err, result) {
	if (result) {
		console.log('COMPILED CSS')
		console.log('-------------')
		console.log(result.css.toString())
		fs.writeFileSync(outFile, result.css.toString())
		process.exit(0)
	}

	if (err) {
		console.error('Error: could not compile sass:')
		console.log(err)
	}

	process.exit(1)
})
