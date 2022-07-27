import { styles } from '../components/styles/DoublePanel';
import WorkoutPlans from '../components/workout/WorkoutPlans';
import ExerciseContainer from '../components/workout/ExerciseContainer';
import Exercise from '../components/workout/Exercise';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Workout = ({ user, updatePlan }) => {
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

	let [plans, setPlans] = useState([]);
	let [plan, setPlan] = useState({ name: `Plan 1`, id: `1234123` });
	let [selectedExercise, setSelectedExercise] = useState({
		name: `Bench`,
		sets: 4,
		reps: 8,
		units: `reps`,
		id: `231412323`,
	});
	let [exerciseRecord, setExerciseRecord] = useState([]);

	useEffect(() => {
		//load plans
		const getPlansByUser = async () => {
			let plans = await axios.get(`http://127.0.0.1:3001/plan`, { params: { userId: user._id } });
			setPlans(plans.data);
		};
		getPlansByUser();
	}, []);

	//saving plans to user
	useEffect(() => {
		updatePlan(plan);
		const saveUserPlan = async () => {
			const res = await axios.put('http://127.0.0.1:3001/user/updateplan', { _id: user._id, plan: plan._id });
		};
		saveUserPlan();
	}, [plan]);

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

	return (
		<div>
			<WorkoutPlans plans={plans} plan={plan} setPlan={setPlan}></WorkoutPlans>
			<div style={styles.container}>
				<div style={styles.rightPanel}>
					<ExerciseContainer exercises={exercises} selectedExercise={selectedExercise} setExercise={setSelectedExercise} />
				</div>
				<div style={styles.leftPanel}>
					<h3 style={label}>Exercise: {selectedExercise.name}</h3>
					<Exercise exercise={exerciseRecord[exercises.indexOf(selectedExercise)]} />
				</div>
			</div>
		</div>
	);
};

export default Workout;
