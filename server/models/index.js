const mongoose = require('mongoose');
const ExerciseSchema = require('./exercise');
const WorkoutRecord = require('./workoutRecord');

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const WorkoutRecord = mongoose.model('WorkoutRecord', WorkoutRecord);

module.exports = {
	Exercise,
	WorkoutRecord,
};
