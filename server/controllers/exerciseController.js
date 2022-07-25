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
	}
};

module.exports = { getAllExercise, addExercise };
