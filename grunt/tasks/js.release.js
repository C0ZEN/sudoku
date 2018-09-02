module.exports = function (grunt) {
	grunt.registerTask('js.release', 'Create the release script files', () => {
		grunt.task.run([
			'clean:tmpScripts',
			'clean:releaseScripts',
			'preprocess:versionInitiator',
			'concat:release',
			'copy:sw',
			'copy:swInit',
			'babel:concatScripts',
			'babel:uglifyScripts',
			'force:build'
		]);
	});
};
