module.exports = {
	develop: {
		options: {
			verbose : true,
			branch  : 'develop',
			message : 'new release <%= newVersion %>',
			noCommit: false,
			strategy: 'recursive'
		}
	}
};
