module.exports = function (grunt) {
	grunt.registerTask('build', 'Create a build for the vendors', () => {
		grunt.task.run([
			'copy:defaultHtml',
			'useminPrepare',
			'concat:generated',
			'usemin',
			'sass:loader',
			'htmlmin:defaultTemplate'
		]);
	});
};
