module.exports = {
	release: {
		options: {
			verbose  : true,
			tag      : '<%= newVersion %>',
			message  : 'new version <%= newVersion %>',
			remove   : false,
			annotated: false,
			force    : false
		}
	}
};
