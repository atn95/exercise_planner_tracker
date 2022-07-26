const mongoose = require('mongoose');
const ExerciseSchema = require('./exercise');
const WorkoutRecordSchema = require('./workoutRecord');
const ExercisePlanSchema = require('./exerciseplan');

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const WorkoutRecord = mongoose.model('WorkoutRecord', WorkoutRecordSchema);
const ExercisePlan = mongoose.model('ExercisePlan', ExercisePlanSchema);

module.exports = {
	Exercise,
	WorkoutRecord,
	ExercisePlan,
};
