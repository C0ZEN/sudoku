module.exports = {
	release: {
		options: {
			verbose  : true,
			tag      : '<%= newVersion %>',
			message  : 'Version <%= newVersion %>',
			remove   : false,
			annotated: false,
			force    : false
		}
	}
};
