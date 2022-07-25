import { styles } from '../styles/DoublePanel';
import WorkoutPlans from './WorkoutPlans';
import ExerciseContainer from './ExerciseContainer';
import { useState } from 'react';

const Workout = () => {
	let [exercises, setExercises] = useState([
		{ name: `Bench`, sets: 4, reps: 8, units: `reps` },
		{ name: `Bicep Curls`, sets: 4, reps: 8, units: `reps` },
		{ name: `Pullups`, sets: 4, reps: 8, units: `reps` },
		{ name: `Shoulder Press`, sets: 4, reps: 8, units: `reps` },
	]);

	let [plans, setPlans] = useState([
		{ name: `Plan 1`, id: `1234123` },
		{ name: `Plan 2`, id: `123423` },
		{ name: `Plan 3`, id: `42321432` },
		{ name: `Plan 4`, id: `4234234` },
	]);

	let [plan, setPlan] = useState({ name: `Plan 1`, id: `1234123` });

	return (
		<div>
			<WorkoutPlans plans={plans} plan={plan} setPlan={setPlan}></WorkoutPlans>
			<div style={styles.container}>
				<div style={styles.rightPanel}>
					<ExerciseContainer />
				</div>
				<div style={styles.leftPanel}></div>
			</div>
		</div>
	);
};

export default Workout;
