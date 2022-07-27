const { WorkoutRecord, Exercise } = require('../models');

const createRecord = async (req, res) => {
	try {
		const exercise = await Exercise.findById(req.body.exerciseId);
		let weights = [];
		let reps = [];
		for (let i = 0; i < exercise.sets; i++) {
			weights.push({ weight: '', units: exercise.units });
		}
		for (let i = 0; i < exercise.sets; i++) {
			reps.push(0);
		}
		let record = { exerciseId: req.body.exerciseId, weights: weights, reps, reps, userId: req.body.userId };
		const recordLog = await new WorkoutRecord(record);
		recordLog.save();
		res.json(recordLog);
	} catch (error) {
		console.log(error);
		res.send(`error`);
	}
};

module.exports = { createRecord };
