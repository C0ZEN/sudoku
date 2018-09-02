module.exports = {
	defaultHtml: {
		src : 'docs/_layouts/default.tpl.html',
		dest: 'docs/_layouts/default.useless.html'
	},
	sw         : {
		src : 'docs/scripts/sw.js',
		dest: 'docs/release/sw.js'
	},
	swInit     : {
		src : 'docs/scripts/sw.init.js',
		dest: 'docs/release/sw.init.js'
	}
};
