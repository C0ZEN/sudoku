module.exports = {
	develop: {
		options: {
			verbose : true,
			branch  : 'develop',
			message : 'Release <%= newVersion %>',
			noCommit: false,
			strategy: 'recursive'
		}
	}
};
