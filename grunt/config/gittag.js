module.exports = {
	release: {
		options: {
			verbose  : true,
			tag      : '<%= newVersion %>',
			message  : 'new tag <%= newVersion %>',
			remove   : false,
			annotated: false,
			force    : false
		}
	}
};
