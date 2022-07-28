import { useEffect, useState } from 'react';
import { styles } from '../components/styles/DoublePanel';
import '../index.css';
import AddPlanPopup from '../components/workout/AddPlanPopup';
import Plan from '../components/workout/Plan';
import DaySchedule from '../components/workout/DaySchedule';
import axios from 'axios';

const PlanManager = ({ user }) => {
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
		const getPlansByUser = async () => {
			let plans = await axios.get(`http://127.0.0.1:3001/plan`, { params: { userId: user._id } });
			setPlans(plans.data);
		};
		getPlansByUser();
	}, []);

	let [selectedPlan, setSelectedPlan] = useState(null);
	let [showAddPopup, setShowPopup] = useState(false);
	let [save, setSave] = useState(false);

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
	let [schedule, setSchedule] = useState(null);
	useEffect(() => {
		const getSchedule = async () => {
			if (selectedPlan) {
				let schedule = await axios.get(`http://127.0.0.1:3001/plan/id`, { params: { planId: selectedPlan._id } });
				setSchedule(schedule.data[0]);
			}
		};
		getSchedule();
	}, [selectedPlan]);

	useEffect(() => {
		const saveSchedule = async () => {
			if (save) {
				let response = await axios.post('http://127.0.0.1:3001/updateplan', schedule);
				setSave(false);
			}
		};
		saveSchedule();
	}, [save]);

	const selectPlan = (plan) => {
		setSelectedPlan(plan);
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

	const savePlan = async () => {
		setSave(true);
	};

	const deletePlan = async () => {
		console.log(`clicked`);
		let resp = await axios.delete('http://127.0.0.1:3001/plan/' + selectedPlan._id);
		console.log(resp.data);
		let tempPlans = [...plans];
		tempPlans.splice(plans.indexOf(selectedPlan), 1);
		setPlans(tempPlans);
		setSelectedPlan(null);
	};

	return (
		<div style={styles.container}>
			{showAddPopup ? <AddPlanPopup user={user} close={closeAddScreen} addPlan={addPlan} /> : ``}
			<div style={styles.leftPanel}>
				<h3 style={componentStyles.label}>Current Plan: </h3>
				{plans.map((plan) => (
					<Plan schedule={schedule} dayIndex={dayIndex} setDayIndex={setDayIndex} plan={plan} selectPlan={selectPlan} selectedPlan={selectedPlan} deletePlan={deletePlan} />
				))}
				<div
					className='save'
					style={{
						...componentStyles.plans,
						marginTop: `20px`,
					}}
					onClick={savePlan}>
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
			<div style={styles.rightPanel}>{schedule ? <DaySchedule removeExercise={removeExercise} addExercise={addExercise} day={schedule.schedule[dayIndex]} /> : ``}</div>
		</div>
	);
};

export default PlanManager;
