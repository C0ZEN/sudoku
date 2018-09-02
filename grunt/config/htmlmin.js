module.exports = {
	defaultTemplate: {
		options: {
			minifyCSS            : true,
			minifyJS             : true,
			removeComments       : true,
			useShortDoctype      : true,
			sortAttributes       : true,
			sortClassName        : true,
			decodeEntities       : true,
			collapseWhitespace   : true,
			removeAttributeQuotes: true
		},
		files  : {
			'docs/_layouts/default.html': 'docs/_layouts/default.clean.html'
		}
	}
};
