module.exports = {
	options: {
		files             : [
			'package.json'
		],
		commit            : true,
		commitMessage     : 'build: new <%= newVersionTarget %> <%= newVersion %>',
		commitFiles       : [
			'-a'
		],
		createTag         : false,
		tagName           : '<%= newVersion %>',
		tagMessage        : 'new version <%= newVersion %>',
		push              : false,
		pushTo            : 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace     : false,
		prereleaseName    : false,
		metadata          : '',
		regExp            : false
	}
};
