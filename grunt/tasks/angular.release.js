module.exports = function (grunt) {
	grunt.registerTask('angular.release', 'Create the Angular production release', () => {
		grunt.task.run([
			'npm-command:angular-build',
			'force:build'
		]);
	});
};
