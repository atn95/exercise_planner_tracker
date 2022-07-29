const { Schema } = require('mongoose');

const User = new Schema(
	{
		username: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },
		plan: { type: Object, defualt: null },
	},
	{ timestamps: true }
);

module.exports = User;
