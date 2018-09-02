module.exports = grunt => {
	return {
		manifest: {
			options: {
				context: {
					config: grunt.file.readYAML('docs/_config.yml')
				}
			},
			src    : 'docs/manifest.clean.json',
			dest   : 'docs/manifest.json'
		}
	};
};
