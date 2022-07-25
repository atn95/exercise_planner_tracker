const mongoose = require('mongoose');
const ExerciseSchema = require('./exercise');
const WorkoutRecordSchema = require('./workoutRecord');

const Exercise = mongoose.model('Exercise', ExerciseSchema);
const WorkoutRecord = mongoose.model('WorkoutRecord', WorkoutRecordSchema);

module.exports = {
	Exercise,
	WorkoutRecord,
};
