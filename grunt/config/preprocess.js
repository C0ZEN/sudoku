module.exports = grunt => {
	return {
		manifest: {
			options: {
				context: {
					config: '<%= jekyllFile %>'
				}
			},
			src    : 'manifest.json',
			dest   : 'docs/manifest.json'
		}
	};
};
