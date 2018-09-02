module.exports = function (grunt) {

	const chalk = require('chalk');

	grunt.registerTask('internal.changelogRequired', 'Log about missing changelog update', () => {
		grunt.log.writeln('\n' + chalk.yellow.bold('WARNING !'));
		grunt.log.writeln('Please consider updating the ' + chalk.cyan('CHANGELOG.md') + ' before creating a new release.');
	});
};
