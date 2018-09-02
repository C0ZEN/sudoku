module.exports = grunt => {
	return {
		versionInitiator: {
			options: {
				context: {
					version: '<%= newVersion %>'
				}
			},
			src    : 'docs/scripts/initiators/version.initiator.js',
			dest   : '.tmp/release/version.initiator.js'
		},
		manifest        : {
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
