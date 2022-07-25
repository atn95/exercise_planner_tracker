import { useState } from 'react';

const Plan = ({ plan, selectPlan, selectedPlan }) => {
	const styles = {
		plans: {
			textAlign: `left`,
			border: `1px solid black`,
			width: `90%`,
			margin: `0 auto`,
			padding: `0`,
			paddingLeft: `10px`,
			background: `white`,
		},
		dates: {},
	};

	//reload Schedule upon changing plan
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
		planId: plan.id,
		name: plan.name,
	});

	let [dayIndex, setDayIndex] = useState(0);

	const chooseDate = (index) => {
		setDayIndex(index);
		console.log(dayIndex);
	};

	const showDates = () => {
		return (
			<div>
				{schedule.schedule.map((day) => (
					<div
						onClick={() => chooseDate(schedule.schedule.indexOf(day))}
						className={'days'}>
						<div
							className={
								schedule.schedule.indexOf(day) == dayIndex ? 'selected' : ''
							}>
							{day.day}
						</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			onClick={() => selectPlan(plan)}
			style={styles.plans}
			className={'plansPageDiv '}>
			<h5
				className={selectedPlan.id == plan.id ? 'selected' : ''}
				style={{ margin: `5px auto` }}>
				{plan.name}
			</h5>
			{selectedPlan.id === schedule.planId ? showDates() : ''}
		</div>
	);
};

export default Plan;
