import { useEffect, useState } from 'react';
import { styles } from '../styles/DoublePanel';
import '../../index.css';
import AddPlanPopup from './AddPlanPopup';
import Plan from './Plan';
import DaySchedule from './DaySchedule';

const PlanManager = () => {
	//TODO: load plan from db
	const componentStyles = {
		label: {
			paddingLeft: `10px`,
			textAlign: `left`,
		},
		plans: {
			textAlign: `left`,
			border: `1px solid black`,
			width: `90%`,
			margin: `0 auto`,
			padding: `0`,
			paddingLeft: `10px`,
		},
		btnStyle: { margin: `5px auto`, textAlign: `center` },
	};

	let [plans, setPlans] = useState([]);

	useEffect(() => {
		//load plans
	}, []);

	let [selectedPlan, setSelectedPlan] = useState({
		name: `Plan 1`,
		id: `1234123`,
	});

	let [showAddPopup, setShowPopup] = useState(false);

	const openAddScreen = () => {
		setShowPopup(true);
	};
	const closeAddScreen = () => {
		setShowPopup(false);
	};

	let [dayIndex, setDayIndex] = useState(0);

	const addPlan = (plan) => {
		setPlans([...plans, plan]);
	};

	//reload Schedule upon changing plan
	let [schedule, setSchedule] = useState({
		schedule: [
			{
				day: `Sunday`,
				exercise: [
					{ name: `Bench`, sets: 4, reps: 8, unit: 'lbs' },
					{ name: `Bicep`, sets: 4, reps: 8, unit: 'lbs' },
				],
			},
			{ day: `Monday`, exercise: [] },
			{ day: `Tuesday`, exercise: [] },
			{ day: `Wednesday`, exercise: [] },
			{ day: `Thursday`, exercise: [] },
			{ day: `Friday`, exercise: [] },
			{ day: `Saturday`, exercise: [] },
		],
		planId: selectedPlan.id,
		name: selectedPlan.name,
		_id: `12412334122341`,
	});

	useEffect(() => {}, [selectedPlan]);

	const selectPlan = (plan) => {
		setSelectedPlan(plan);
		//TOD): pullSchedule
		setSchedule({
			...schedule,
			planId: plan.id,
			name: plan.name,
		});

		console.log(schedule);
	};

	const addExercise = (exercise) => {
		let tempSched = { ...schedule };
		tempSched.schedule[dayIndex].exercise.push(exercise);
		setSchedule(tempSched);
	};

	const removeExercise = (exercise) => {
		let tempSched = { ...schedule };
		tempSched.schedule[dayIndex].exercise.splice(tempSched.schedule[dayIndex].exercise.indexOf(exercise), 1);
		setSchedule(tempSched);
	};

	return (
		<div style={styles.container}>
			{showAddPopup ? <AddPlanPopup close={closeAddScreen} addPlan={addPlan} /> : ``}
			<div style={styles.leftPanel}>
				<h3 style={componentStyles.label}>Current Plan: </h3>
				{plans.map((plan) => (
					<Plan schedule={schedule} dayIndex={dayIndex} setDayIndex={setDayIndex} plan={plan} selectPlan={selectPlan} selectedPlan={selectedPlan} />
				))}
				<div
					style={{
						...componentStyles.plans,
						marginTop: `20px`,
					}}>
					<h5 style={componentStyles.btnStyle}>Save</h5>
				</div>
				<div
					onClick={openAddScreen}
					className='add'
					style={{
						...componentStyles.plans,
						marginTop: `20px`,
					}}>
					<h5 style={componentStyles.btnStyle}>Add</h5>
				</div>
			</div>
			<div style={styles.rightPanel}>
				<DaySchedule removeExercise={removeExercise} addExercise={addExercise} day={schedule.schedule[dayIndex]} />
			</div>
		</div>
	);
};

export default PlanManager;
