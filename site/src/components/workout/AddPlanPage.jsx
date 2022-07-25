import { useState } from 'react';
import { styles } from '../styles/DoublePanel';
import '../../index.css';
import AddPlanPopup from './AddPlanPopup';
import Plan from './Plan';

const AddPlanPage = ({}) => {
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

	const addPlan = (plan) => {
		setPlans([...plans, plan]);
	};

	const selectPlan = (plan) => {
		setSelectedPlan(plan);
	};

	return (
		<div style={styles.container}>
			{showAddPopup ? (
				<AddPlanPopup close={closeAddScreen} addPlan={addPlan} />
			) : (
				``
			)}
			<div style={styles.leftPanel}>
				<h3 style={componentStyles.label}>Current Plan: </h3>
				{plans.map((plan) => (
					<Plan
						plan={plan}
						selectPlan={selectPlan}
						selectedPlan={selectedPlan}
					/>
				))}
				<div
					onClick={openAddScreen}
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

export default AddPlanPage;
