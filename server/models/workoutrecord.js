const { Schema } = require('mongoose');

const ExerciseRecord = new Schema(
	{
		exerciseId: { type: String, required: true },
		sets: [{ set: { type: Number }, weight: { type: Number }, units: { type: String }, reps: { type: Number } }],
		userId: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = ExerciseRecord;
