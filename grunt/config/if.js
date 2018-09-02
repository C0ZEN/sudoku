module.exports = function (grunt) {
	return {
		isChangelogUpdated    : {
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
		isFakeChangelogUpdated: {
			options: {
				test() {
					return grunt.config.get('isChangelogUpdated');
				}
			},
			ifTrue : [
				'prompt:chooseRelease',
				'prompt:confirmFakeRelease',
				'if:isFakeReleaseConfirmed'
			],
			ifFalse: [
				'internal.changelogRequired'
			]
		},
		isReleaseConfirmed    : {
			options: {
				test() {
					return grunt.config.get('isReleaseConfirmed');
				}
			},
			ifTrue : [
				'gitcheckout:develop',          // Go to the develop branch
				'string-replace:changelogTag',  // Update the changelog [add tag]
				'string-replace:jekyllVersion', // Update the config [add tag]
				'angular.release',              // Create the Angular release
				'copy:jekyll',                  // Create a new jekyll config into docs folder
				'copy:index',                   // Create the layout file for jekyll
				'preprocess:manifest',          // Create a new manifest into docs folder
				'internal.bump',                // Update the package [add tag] and commit all files
				'gitpush:develop',              // Push the commit
				'gitcheckout:master',           // Go to the master branch
				'gitmerge:develop',             // Merge the develop into the master
				'gittag:release',               // Create a tag
				'gitpush:master',               // Push the commit and the tag
				'gitcheckout:develop',          // Go to the develop branch
				'npm-command:publish'           // Publish to npm
			]
		},
		isFakeReleaseConfirmed: {
			options: {
				test() {
					return grunt.config.get('isFakeReleaseConfirmed');
				}
			},
			ifTrue : [
				'gitcheckout:develop',
				'string-replace:changelogTag',
				'string-replace:jekyllVersion',
				'angular.release',
				'copy:jekyll',
				'copy:index',
				'preprocess:manifest'
			]
		}
	};
};
