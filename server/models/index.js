const mongoose = require('mongoose');
const ExerciseSchema = require('./exercise');
const WorkoutRecordSchema = require('./workoutrecord');
const ExercisePlanSchema = require('./exerciseplan');
const UserSchema = require('./user');

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const WorkoutRecord = mongoose.model('WorkoutRecord', WorkoutRecordSchema);
const ExercisePlan = mongoose.model('ExercisePlan', ExercisePlanSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
	Exercise,
	WorkoutRecord,
	ExercisePlan,
	User,
};
