const Plan = ({ plan, selectPlan, selectedPlan, dayIndex, setDayIndex, schedule }) => {
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

	const chooseDate = (index) => {
		setDayIndex(index);
		console.log(dayIndex);
	};

	const showDates = () => {
		if (schedule) {
			return (
				<div>
					{schedule.schedule.map((day) => (
						<div onClick={() => chooseDate(schedule.schedule.indexOf(day))} className={'days'}>
							<div className={schedule.schedule.indexOf(day) == dayIndex ? 'selected' : ''}>{day.day}</div>
						</div>
					))}
				</div>
			);
		} else {
			return <div></div>;
		}
	};

	return (
		<div onClick={() => selectPlan(plan)} style={styles.plans} className={'plansPageDiv '}>
			{
				<h5 className={selectedPlan && selectedPlan._id == plan._id ? 'selected' : ''} style={{ margin: `5px auto` }}>
					{plan.name}
				</h5>
			}
			{selectedPlan != null && schedule != null && plan._id === schedule._id ? showDates() : ''}
		</div>
	);
};

export default Plan;
