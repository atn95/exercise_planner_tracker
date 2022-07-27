const { Schema } = require('mongoose');

const ExerciseRecord = new Schema(
	{
		exerciseId: { type: String, required: true },
		weights: { type: Array, required: true },
		reps: { type: Array, required: true },
		userId: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = ExerciseRecord;
