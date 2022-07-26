const express = require('express');
const collection = require('./controllers');
const db = require('./db');
const logger = require('morgan');
const cors = require('cors');

// MIDDLEWARE
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(logger(`dev`));
app.use(cors());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get('/', (req, res) => res.json(`root`));

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

//=================post====================
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
