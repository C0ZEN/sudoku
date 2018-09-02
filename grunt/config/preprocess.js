module.exports = grunt => {
	return {
		manifest: {
			options: {
				context: {
					config: grunt.file.readYAML('_config.yml')
				}
			},
			src    : 'manifest.json',
			dest   : 'docs/manifest.json'
		}
	};
};
