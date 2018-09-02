module.exports = {
	options: {
		nonull      : true,
		banner      : '/* start:concat-scripts */\n',
		footer      : '\n/* end:concat-scripts */',
		stripBanners: true,
		sourceMap   : true
	},
	release: {
		src : [
			'docs/scripts/**/*',
			'.tmp/release/version.initiator.js',
			'!docs/scripts/initiators/version.initiator.js',
			'!docs/scripts/sw.js',
			'!docs/scripts/sw.init.js'
		],
		dest: '.tmp/release/scripts.js'
	}
};
