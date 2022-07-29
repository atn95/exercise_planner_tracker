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

	let [exercises, setExercises] = useState([]);
	let [plans, setPlans] = useState([]);
	let [plan, setPlan] = useState(user.plan);
	let [selectedExercise, setSelectedExercise] = useState(null);

	useEffect(() => {
		//load plans
		const getPlansByUser = async () => {
			let plans = await axios.get(`/api/plan`, { params: { userId: user._id } });
			setPlans(plans.data);
		};
		getPlansByUser();
	}, []);

	//saving plans to user
	useEffect(() => {
		updatePlan(plan);
		const saveUserPlan = async () => {
			const res = await axios.put('/api/user/updateplan', { _id: user._id, plan: plan._id });
			let schedule = await axios.get(`/api/plan/id`, { params: { planId: plan._id } });
			let day = new Date().getDay();
			setExercises(schedule.data[0].schedule[day].exercise);
		};
		saveUserPlan();
	}, [plan]);

	return (
		<div>
			<WorkoutPlans plans={plans} plan={plan} setPlan={setPlan}></WorkoutPlans>
			<div style={styles.container}>
				<div style={styles.leftPanel}>
					<ExerciseContainer exercises={exercises} selectedExercise={selectedExercise} setExercise={setSelectedExercise} />
				</div>
				<div style={styles.rightPanel}>
					<h3 style={label}>Exercise: {selectedExercise ? `${selectedExercise.name}` : ''}</h3>
					{selectedExercise ? <Exercise exercise={selectedExercise} user={user} /> : ``}
				</div>
			</div>
		</div>
	);
};

export default Workout;
