const { WorkoutRecord, Exercise } = require('../models');

const createRecord = async (req, res) => {
	try {
		const exercise = await Exercise.findById(req.body.exerciseId);
		let sets = [];
		for (let i = 0; i < exercise.sets; i++) {
			sets.push({ set: i, weight: null, units: exercise.units, reps: null });
		}
		let record = { exerciseId: req.body.exerciseId, sets: sets, userId: req.body.userId };
		const recordLog = await new WorkoutRecord(record);
		recordLog.save();
		res.json(recordLog);
	} catch (error) {
		console.log(error);
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

const getUniqueExercise = async (req, res) => {
	try {
		let exerciseIdTracker = {};
		let uniqueExId = [];
		let records = await WorkoutRecord.find({ userId: req.query.userId });
		records.forEach((record) => {
			if (!exerciseIdTracker[record.exerciseId]) {
				exerciseIdTracker[record.exerciseId] = true;
				uniqueExId.push(record.exerciseId);
			}
		});

		let foundExercise = [];

		for (const id of uniqueExId) {
			let ex = await Exercise.findOne({ _id: id });
			console.log(`ex:`, ex.toObject());
			foundExercise.push(ex);
		}

		res.send(foundExercise);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { createRecord, getToday, saveRecord, getUniqueExercise };
