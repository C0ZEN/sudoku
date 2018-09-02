module.exports = {
	master : {
		options: {
			verbose : true,
			remote  : 'origin',
			branch  : 'master',
			all     : false,
			tags    : true,
			upstream: true,
			force   : false
		}
	},
	develop: {
		options: {
			verbose : true,
			remote  : 'origin',
			branch  : 'develop',
			all     : false,
			tags    : true,
			upstream: true,
			force   : false
		}
	}
};
