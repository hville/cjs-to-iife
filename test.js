const ct = require('cotest'),
			bundle = require('./index')

ct('bundled script', async (t,end) => {
	const code = await bundle('./node_modules/cotest/index.js')
	eval(code)
	t('{==}', Object.keys(this.exports), ['default'])
	t('===', typeof this.exports.default, 'function')
	t('===', this.exports.default('fake'), undefined)
	end()
})
