const { Schema } = require('mongoose');

const ExerciseRecord = new Schema(
	{
		exerciseID: { type: String, required: true },
		weights: [{ weight: { type: String, required: true } }],
		reps: [{ rep: { type: String, required: true } }],
		user: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = ExerciseRecord;
