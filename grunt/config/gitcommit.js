module.exports = {
	bump: {
		options: {
			verbose   : true,
			message   : 'build: new <%= newVersionTarget %> <%= newVersion %>',
			allowEmpty: false,
			noVerify  : false,
			noStatus  : false
		}
	}
};
