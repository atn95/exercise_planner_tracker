const { WorkoutRecord, Exercise } = require('../models');

const createRecord = async (req, res) => {
	try {
		const exercise = await Exercise.findById(req.body.exerciseId);
		let sets = [];
		for (let i = 0; i < exercise.sets; i++) {
			sets.push({ set: i, weight: 0, units: exercise.units, reps: 0 });
		}
		let record = { exerciseId: req.body.exerciseId, sets: sets, userId: req.body.userId };
		const recordLog = await new WorkoutRecord(record);
		recordLog.save();
		res.json(recordLog);
	} catch (error) {
		console.log(error);
		// res.status(200).send(`error`);
	}
};

const getToday = async (req, res) => {
	try {
		let recordFound = await WorkoutRecord.find({ exerciseId: req.body.exerciseId, userId: req.body.userId });
		const d = new Date().toISOString().split(`T`);
		let exist = false;
		recordFound.forEach((record) => {
			if (record.createdAt.toISOString().split(`T`)[0] == d[0]) {
				exist = true;
				return res.json(record);
			}
		});
		if (!exist) {
			createRecord(req, res);
		}
	} catch (error) {
		console.log(error);
	}
};

const saveRecord = async (req, res) => {
	try {
		let id = req.body._id;
		// let record = await WorkoutRecord.find();
		let record = await WorkoutRecord.findByIdAndUpdate(id, req.body);
		res.json({ ...record, message: 'saved' });
	} catch (error) {}
};

module.exports = { createRecord, getToday, saveRecord };
