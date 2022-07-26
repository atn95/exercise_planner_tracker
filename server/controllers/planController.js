const { ExercisePlan } = require('../models');

const createExercisePlan = async (req, res) => {
	try {
		let newPlan = {
			name: req.body.name,
			schedule: [
				{ day: 'Sunday', exercise: [] },
				{ day: 'Monday', exercise: [] },
				{ day: 'Tuesday', exercise: [] },
				{ day: 'Wednesday', exercise: [] },
				{ day: 'Thursday', exercise: [] },
				{ day: 'Friday', exercise: [] },
				{ day: 'Saturday', exercise: [] },
			],
		};
		const plan = await new ExercisePlan(newPlan);
		plan.save();
		res.json(plan);
	} catch (error) {
		console.log(error);
		res.send({ message: 'error' });
	}
};

const getExercisePlanFrom = async (req, res) => {
	try {
		let exPlan = await ExercisePlan.find({ userId: req.body.userId });
		res.send(exPlan);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createExercisePlan,
	getExercisePlanFrom,
};
