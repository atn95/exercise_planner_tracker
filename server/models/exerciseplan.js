const { Schema } = require('mongoose');

const ExercisePlan = new Schema(
	{
		name: { type: String, required: true },
		schedule: [{ day: { type: String, required: true }, exercise: { type: Array, required: true } }],
		userId: { type: String, default: `Test1234` },
	},
	{ timestamps: true }
);

module.exports = ExercisePlan;
