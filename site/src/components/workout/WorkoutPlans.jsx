import { useState } from 'react';
import '../styles/workoutplans.css';
import { Link } from 'react-router-dom';

const WorkoutPlans = ({ plan, setPlan, plans }) => {
	let styles = {
		container: {
			width: `min(1400px, 90%)`,
			border: `2px solid black`,
			margin: `10px auto`,
			borderRadius: `10px`,
			minHeight: `50px`,
			textAlign: `left`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `space-between`,
		},
		plansDiv: {
			display: `block`,
			margin: `0 auto`,
			paddingLeft: `10px`,
			hieght: `100%`,
			border: `0px solid black`,
		},
		head: {
			width: `100%`,
			margin: `0 auto`,
			borderRadius: `10px`,
			minHeight: `50px`,
			textAlign: `left`,
			display: `flex`,
			justifyContent: `space-between`,
		},
	};

	let [showPlans, setShowPlans] = useState(false);
	const changePlan = (p) => {
		setPlan(p);
		setShowPlans(!showPlans);
	};

	return (
		<div style={styles.container}>
			<div style={styles.head} onClick={() => setShowPlans(!showPlans)}>
				<h2 style={{ paddingLeft: `10px` }}> Workout Plan: {plan.name}</h2>
				<h2 onClick={() => setShowPlans(!showPlans)} style={{ paddingRight: `20px`, paddingLeft: `20px` }}>
					{showPlans ? `-` : '+'}
				</h2>
			</div>
			<div>
				{showPlans
					? plans.map((p) => (
							<div style={styles.plansDiv} className='plansDiv' onClick={() => changePlan(p)}>
								<h2 style={p.id == plan.id ? { fontWeight: `700` } : { fontWeight: `300` }}>{p.name}</h2>
							</div>
					  ))
					: ''}
				{showPlans ? (
					<Link to='/addplan' style={{ textDecoration: `none`, color: `green` }}>
						<div style={styles.plansDiv} className='plansDiv'>
							<h2 style={{ textDecoration: `none`, fontWeight: 500 }}>Manage Plan</h2>
						</div>
					</Link>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default WorkoutPlans;
