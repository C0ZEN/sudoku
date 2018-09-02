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
				'gitcheckout:develop',          // Go to the develop branch
				'angular.release',              // Create the Angular release
				'string-replace:changelog',     // Update the changelog [add tag]
				'string-replace:configVersion', // Update the config [add tag]
				'preprocess:manifest',          // Create a new manifest into docs folder
				'internal.bump',                // Update the package [add tag] and create a commit
				'gitpush:develop',              // Push the commit
				'gitcheckout:master',           // Go to the master branch
				'gitmerge:develop',             // Merge the develop into the master
				'gittag:release',               // Create a tag
				'gitpush:master',               // Push the commit and the tag
				'gitcheckout:develop'           // Go to the develop branch
			]
		}
	};
};
