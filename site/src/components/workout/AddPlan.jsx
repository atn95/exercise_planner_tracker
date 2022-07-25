import { useState } from 'react';
import { styles } from '../styles/DoublePanel';
import '../../index.css';

const AddPlan = ({}) => {
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
	};

	let [plans, setPlans] = useState([
		{ name: `Plan 1`, id: `1234123` },
		{
			name: `Plan 2`,
			id: `1234125`,
		},
	]);

	let [selectedPlan, setSelectedPlans] = useState({
		name: `Plan 1`,
		id: `1234123`,
	});

	let [schedule, setSchedule] = useState({
		schedule: [
			{ day: `Sunday`, exercise: [] },
			{ day: `Monday`, exercise: [] },
			{ day: `Tuesday`, exercise: [] },
			{ day: `Wednesday`, exercise: [] },
			{ day: `Thursday`, exercise: [] },
			{ day: `Friday`, exercise: [] },
			{ day: `Saturday`, exercise: [] },
		],
		planId: `1234123`,
		name: `Plan 1`,
	});

	return (
		<div style={styles.container}>
			<div style={styles.leftPanel}>
				<h3 style={componentStyles.label}>Current Plan: </h3>
				{plans.map((plan) => (
					<div
						style={componentStyles.plans}
						className={
							'plansDiv ' + (selectedPlan.id == plan.id ? 'selected' : '')
						}>
						<h5 style={{ margin: `5px auto` }}>{plan.name}</h5>
					</div>
				))}
				<div
					className='add'
					style={{
						...componentStyles.plans,
						marginTop: `20px`,
					}}>
					<h5 style={{ margin: `5px auto`, textAlign: `center` }}>Add</h5>
				</div>
			</div>
			<div style={styles.rightPanel}>Right Panel</div>
		</div>
	);
};

export default AddPlan;
