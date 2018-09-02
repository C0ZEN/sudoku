module.exports = function (grunt) {
	grunt.registerTask('internal.saveJekyll', 'Save the content of the Jekyll file into a variable', () => {
		grunt.config.set('jekyllFile', grunt.file.readYAML('jekyll.yml'));
	});
};
