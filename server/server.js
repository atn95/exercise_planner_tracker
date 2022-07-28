const express = require('express');
const collection = require('./controllers');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors');

// MIDDLEWARE
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());
app.use(express.json());
app.use(logger(`dev`));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//=============get===================

app.get(
	'/getexercise',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.getAllExercise
);

app.get(
	'/search/:term',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.searchExercise
);

app.get(
	'/plan/id',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.getExercisePlanByID
);

app.get(
	'/plan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.getExercisePlanFromUser
);

app.get('/recordlist', collection.exerciseLogger.getUniqueExercise);

app.get('/recordbyexercise', collection.exerciseLogger.getRecordsByExercise);
//===============put======================

app.put('/user/updateplan', collection.user.updateUserPlan);

app.put('/log/save', collection.exerciseLogger.saveRecord);

//=================post====================
app.post('/register', collection.user.createUser);
app.post('/login', collection.user.login);

app.post(
	'/addexercise',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exercise.addExercise
);

app.post(
	'/create/plan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.createExercisePlan
);

app.post(
	'/updateplan',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.plan.updatePlan
);

app.post(
	'/log/gettoday',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exerciseLogger.getToday
);

app.post(
	'/log/create',
	(req, res, next) => {
		//check auth
		next();
	},
	collection.exerciseLogger.createRecord
);

app.delete('/plan/:id', collection.plan.deletePlanById);
