const db = require('../db');
const { WorkoutRecord } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let data = [
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 60,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 60,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 60,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 60,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-20T20:04:00.613Z',
		updatedAt: '2022-07-20T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-21T21:04:00.613Z',
		updatedAt: '2022-07-21T21:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 65,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-22T20:04:00.613Z',
		updatedAt: '2022-07-22T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-23T20:04:00.613Z',
		updatedAt: '2022-07-23T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-24T20:04:00.613Z',
		updatedAt: '2022-07-24T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-25T20:04:00.613Z',
		updatedAt: '2022-07-25T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 70,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-26T20:04:00.613Z',
		updatedAt: '2022-07-26T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 75,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-07-27T20:04:00.613Z',
		updatedAt: '2022-07-27T20:04:49.297Z',
		__v: 0,
	},

	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-06-25T20:04:00.613Z',
		updatedAt: '2022-06-25T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-06-26T20:04:00.613Z',
		updatedAt: '2022-06-26T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-06-27T20:04:00.613Z',
		updatedAt: '2022-06-27T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 45,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-06-28T20:04:00.613Z',
		updatedAt: '2022-06-28T20:04:49.297Z',
		__v: 0,
	},
	{
		exerciseId: '62df44c0fd8588a7eba8c431',
		sets: [
			{
				set: 0,
				weight: 50,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 1,
				weight: 50,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 2,
				weight: 50,
				units: 'lbs',
				reps: 5,
			},
			{
				set: 3,
				weight: 50,
				units: 'lbs',
				reps: 5,
			},
		],
		userId: '62e0b1e3c78e30e421c6e727',
		createdAt: '2022-06-29T20:04:00.613Z',
		updatedAt: '2022-06-29T20:04:49.297Z',
		__v: 0,
	},
];

const main = async () => {
	await WorkoutRecord.insertMany(data);
	console.log(`inserted fake workout records`);
};

const run = async () => {
	await main();
	db.close();
};

run();
