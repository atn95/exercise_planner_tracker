const { Schema } = require('mongoose');

const Exercise = new Schema(
	{
		name: { type: String, required: true },
		sets: { type: Number, required: true },
		reps: { type: Number, required: true },
		units: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = Exercise;
