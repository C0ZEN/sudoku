module.exports = {
	loader: {
		options: {
			outputStyle   : 'compressed',
			precision     : 2,
			sourceComments: false
		},
		files  : {
			'docs/assets/css/loader.css': 'docs/assets/css/loader.scss'
		}
	}
};
