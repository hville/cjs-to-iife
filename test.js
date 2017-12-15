const ct = require('cotest'),
			bundle = require('./index')

ct.timeout(10000)

ct('bundled script', async end => {
	const code = await bundle('./node_modules/cotest/index.js')
	eval(code)
	ct('{==}', Object.keys(this.exports), ['default'])
	ct('===', typeof this.exports.default, 'function')
	ct('===', this.exports.default('fake'), undefined)
	end()
})
