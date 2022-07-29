const { Router } = require('express');
const router = Router();
const collection = require('../controllers');

router.get(
	'/getexercise',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.getAllExercise
);

router.get(
	'/search/:term',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.searchExercise
);

router.get(
	'/plan/id',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.getExercisePlanByID
);

router.get(
	'/plan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.getExercisePlanFromUser
);

router.get('/recordlist', collection.exerciseLogger.getUniqueExercise);

router.get('/recordbyexercise', collection.exerciseLogger.getRecordsByExercise);
//===============put======================

router.put('/user/updateplan', collection.user.updateUserPlan);

router.put('/log/save', collection.exerciseLogger.saveRecord);

//=================post====================
router.post('/register', collection.user.createUser);
router.post('/login', collection.user.login);

router.post(
	'/addexercise',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.addExercise
);

router.post(
	'/create/plan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.createExercisePlan
);

router.post(
	'/updateplan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.updatePlan
);

router.post(
	'/log/gettoday',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exerciseLogger.getToday
);

router.post(
	'/log/create',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exerciseLogger.createRecord
);

router.delete('/plan/:id', collection.plan.deletePlanById);

module.exports = router;
