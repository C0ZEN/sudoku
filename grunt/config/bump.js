module.exports = {
	options: {
		files             : [
			'package.json'
		],
		commit            : false,
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
