module.exports = function (grunt) {

	const chalk = require('chalk');

	return {
		chooseRelease     : {
			options: {
				questions: [
					{
						config : 'chosenRelease',
						type   : 'list',
						message: 'Release from ' + chalk.cyan('<%= oldVersion %>') + ' to:',
						choices: [
							{
								name   : 'patch [<%= newPatchVersion %>]',
								value  : 'patch',
								checked: true
							},
							{
								name : 'minor [<%= newMinorVersion %>]',
								value: 'minor'
							},
							{
								name : 'major [<%= newMajorVersion %>]',
								value: 'major'
							}
						],
						filter(value) {
							let newVersion = null;
							if ('patch' === value) {
								newVersion = grunt.config.get('newPatchVersion');
							}
							else if ('minor' === value) {
								newVersion = grunt.config.get('newMinorVersion');
							}
							else {
								newVersion = grunt.config.get('newMajorVersion');
							}

							// Update the config
							grunt.config.set('newVersion', newVersion);
							grunt.config.set('newVersionTarget', value);
							grunt.config.get('config').newVersion = newVersion;
							grunt.config.get('config').newVersionTarget = value;
							grunt.config.get('config').version = newVersion;

							// Return the value
							return value;
						}
					}
				]
			}
		},
		confirmRelease    : {
			options: {
				questions: [
					{
						config : 'isReleaseConfirmed',
						type   : 'confirm',
						message: 'Create the ' + chalk.cyan('release <%= chosenRelease %> [<%= newVersion %>]') + ' ?',
						default: false
					}
				]
			}
		},
		confirmFakeRelease: {
			options: {
				questions: [
					{
						config : 'isFakeReleaseConfirmed',
						type   : 'confirm',
						message: 'Create the fake ' + chalk.cyan('release <%= chosenRelease %> [<%= newVersion %>]') + ' ?',
						default: false
					}
				]
			}
		},
		isChangelogUpdated: {
			options: {
				questions: [
					{
						config : 'isChangelogUpdated',
						type   : 'confirm',
						message: 'Did you update the ' + chalk.cyan('CHANGELOG.md') + ' ?',
						default: false
					}
				]
			}
		}
	};
};
