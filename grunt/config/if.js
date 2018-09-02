module.exports = function (grunt) {
	return {
		isChangelogUpdated: {
			options: {
				test() {
					return grunt.config.get('isChangelogUpdated');
				}
			},
			ifTrue : [
				'prompt:chooseRelease',
				'prompt:confirmRelease',
				'if:isReleaseConfirmed'
			],
			ifFalse: [
				'internal.changelogRequired'
			]
		},
		isReleaseConfirmed: {
			options: {
				test() {
					return grunt.config.get('isReleaseConfirmed');
				}
			},
			ifTrue : [
				'gitcheckout:develop',
				'js.release',
				'string-replace:changelog',
				'string-replace:configVersion',
				'preprocess:manifest',
				'internal.bump',
				'gitpush:develop',
				'gitcheckout:master',
				'gitmerge:develop',
				'gittag:release',
				'gitpush:master',
				'gitcheckout:develop'
			]
		}
	};
};
