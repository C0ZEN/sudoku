module.exports = {
	options      : {
		sourceMap: true,
		presets  : [
			'es2015'
		]
	},
	concatScripts: {
		files: {
			'docs/release/x-days-later.js': '.tmp/release/scripts.js'
		}
	},
	uglifyScripts: {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'docs/release/x-days-later.min.js': 'docs/release/x-days-later.js',
			'docs/sw.min.js'                  : 'docs/release/sw.js',
			'docs/sw.init.min.js'             : 'docs/release/sw.init.js'
		}
	}
};
