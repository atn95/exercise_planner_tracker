const { Schema } = require('mongoose');

const ExerciseRecord = new Schema(
	{
		exerciseID: { type: String, required: true },
		weight: [{ weight: String, required: true }],
		reps: [{ weight: String, required: true }],
		user: [{ weight: String, required: true }],
	},
	{ timestamps: true }
);

module.exports = ExerciseRecord;
