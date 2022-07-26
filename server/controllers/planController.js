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

const getExercisePlanFromUser = async (req, res) => {
	try {
		let exPlan = await ExercisePlan.find({ userId: req.query.userId }, { schedule: 0 });
		res.json(exPlan);
	} catch (error) {
		console.log(error);
	}
};

const getExercisePlanByID = async (req, res) => {
	try {
		let exPlan = await ExercisePlan.find({ _id: req.query.planId });
		console.log(exPlan);
		res.json(exPlan);
	} catch (error) {
		console.log(error);
	}
};

const updatePlan = async (req, res) => {
	try {
		let plan = await ExercisePlan.findByIdAndUpdate(req.body._id, req.body);
		res.json({ ...req.body, message: 'saved' });
	} catch (error) {}
};

module.exports = {
	createExercisePlan,
	getExercisePlanFromUser,
	getExercisePlanByID,
	updatePlan,
};
