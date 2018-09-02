module.exports = grunt => {
	return {
		manifest: {
			options: {
				context: {
					config: grunt.file.readYAML('jekyll.yml')
				}
			},
			src    : 'manifest.json',
			dest   : 'docs/manifest.json'
		}
	};
};
