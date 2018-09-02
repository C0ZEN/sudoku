module.exports = {
	html   : 'docs/_layouts/default.useless.html',
	options: {
		dest: 'docs/release',
		flow: {
			steps: {
				js : [
					'concat'
				],
				css: [
					'concat'
				]
			}
		}
	}
};
