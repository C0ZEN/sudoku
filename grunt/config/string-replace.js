module.exports = function () {

	const moment = require('moment');

	moment.locale('en');

	return {
		changelogTag    : {
			src    : 'CHANGELOG.md',
			dest   : 'CHANGELOG.md',
			options: {
				replacements: [
					{
						pattern    : /(\#\# \[Unreleased\])/g,
						replacement: '## [Unreleased]\n\n## [<%= newVersion %>] ' + getCurrentDate()
					}
				]
			}
		},
		jekyllVersion: {
			src    : 'jekyll.yml',
			dest   : 'jekyll.yml',
			options: {
				replacements: [
					{
						pattern    : /(version:)\s\d.\d.\d/gmi,
						replacement: 'version: <%= newVersion %>'
					}
				]
			}
		}
	};

	function getCurrentDate() {
		return moment().format('YYYY-MM-DD HH:mm');
	}
};
