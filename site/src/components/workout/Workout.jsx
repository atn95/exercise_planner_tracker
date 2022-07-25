import { styles } from '../styles/DoublePanel';
import WorkoutPlans from './WorkoutPlans';
import ExerciseContainer from './ExerciseContainer';
import Exercise from './Exercise';
import { useState, useEffect } from 'react';

const Workout = () => {
	const label = {
		paddingLeft: `10px`,
		textAlign: `left`,
	};

	let [exercises, setExercises] = useState([
		{ name: `Bench`, sets: 4, reps: 8, units: `reps`, id: `231412323` },
		{ name: `Bicep Curls`, sets: 4, reps: 8, units: `reps`, id: `2323143` },
		{ name: `Pullups`, sets: 4, reps: 8, units: `reps`, id: `1242343` },
		{ name: `Shoulder Press`, sets: 4, reps: 8, units: `reps`, id: `12321342` },
	]);

	let [plans, setPlans] = useState([
		{ name: `Plan 1`, id: `1234123` },
		{ name: `Plan 2`, id: `123423` },
		{ name: `Plan 3`, id: `42321432` },
		{ name: `Plan 4`, id: `4234234` },
	]);

	let [plan, setPlan] = useState({ name: `Plan 1`, id: `1234123` });

	let [selectedExercise, setSelectedExercise] = useState({
		name: `Bench`,
		sets: 4,
		reps: 8,
		units: `reps`,
		id: `231412323`,
	});

	//make exercise record template
	useEffect(() => {
		const initializeExerciseRecord = () => {
			let exRecord = [];
			exercises.forEach((ex) => {
				exRecord.push([]);
				for (let i = 0; i < ex.sets; i++) {
					exRecord[exercises.indexOf(ex)].push({
						name: ex.name,
						exerciseId: ex.id,
						set: i,
						weight: ``,
						reps: ``,
						units: ex.units,
					});
				}
			});
			setExerciseRecord(exRecord);
			// console.log(exRecord);
		};
		console.log(`loaded`);
		initializeExerciseRecord();
	}, [exercises]);

	let [exerciseRecord, setExerciseRecord] = useState([]);

	return (
		<div>
			<WorkoutPlans plans={plans} plan={plan} setPlan={setPlan}></WorkoutPlans>
			<div style={styles.container}>
				<div style={styles.rightPanel}>
					<ExerciseContainer
						exercises={exercises}
						selectedExercise={selectedExercise}
						setExercise={setSelectedExercise}
					/>
				</div>
				<div style={styles.leftPanel}>
					<h3 style={label}>Exercise: {selectedExercise.name}</h3>
					<Exercise
						exercise={exerciseRecord[exercises.indexOf(selectedExercise)]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Workout;
