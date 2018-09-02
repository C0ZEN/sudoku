module.exports = function (grunt) {
	grunt.registerTask('internal.bump', 'Execute the bump task with custom target', () => {
		grunt.task.run([
			'bump:' + grunt.config.get('newVersionTarget')
		]);
	});
};
