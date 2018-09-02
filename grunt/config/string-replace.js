module.exports = function () {

	const moment = require('moment');

	moment.locale('en');

	return {
		changelog    : {
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
		configVersion: {
			src    : 'jekyll.yml',
			dest   : 'jekyll.yml',
			options: {
				replacements: [
					{
						pattern    : /version: ([0-9]+<[.]){2}[0-9]+/g,
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
