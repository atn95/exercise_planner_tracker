const { Exercise } = require('../models');

const getAllExercise = async (req, res) => {
	try {
		const exercise = await Exercise.find();
		res.json(exercise);
	} catch (error) {
		console.log(error);
	}
};

const addExercise = async (req, res) => {
	try {
		const exercise = await new Exercise(req.body);
		exercise.save();
		res.json({ ...exercise, message: `saved` });
	} catch (error) {
		console.log(error);
		res.send({ message: `error` });
	}
};

const searchExercise = async (req, res) => {
	let { term } = req.params;
	let searchTerms = String(term).split(` `);

	let foundExercise = [];
	let keyTracker = {};
	try {
		for (let i = 0; i < searchTerms.length; i++) {
			let found = await Exercise.find({ name: { $regex: searchTerms[i], $options: 'i' } });
			found.forEach((ex) => {
				if (!keyTracker[String(ex._id)]) {
					foundExercise.push(ex);
					keyTracker[String(ex._id)] = true;
				}
			});
		}
		res.json(foundExercise);
	} catch (error) {
		console.log(error);
		res.send({ message: `error` });
	}
};

module.exports = { getAllExercise, addExercise, searchExercise };
