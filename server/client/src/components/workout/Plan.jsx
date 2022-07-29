import deleteIcon from '../../assets/delete.png';

const Plan = ({ plan, selectPlan, selectedPlan, dayIndex, setDayIndex, schedule, deletePlan }) => {
	const styles = {
		plans: {
			textAlign: `left`,
			border: `1px solid black`,
			width: `90%`,
			margin: `0 auto`,
			padding: `0`,
			paddingLeft: `10px`,
			background: `white`,
			zIndex: `0`,
		},
		header: {
			display: `flex`,
			justifyContent: `space-between`,
			marginRight: `10px`,
			zIndex: `0`,
		},
		icon: {
			width: `32px`,
			height: `32px`,
		},
	};

	const chooseDate = (index) => {
		setDayIndex(index);
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
			{' '}
			<div style={styles.header}>
				{
					<h5 className={selectedPlan && selectedPlan._id == plan._id ? 'selected' : ''} style={{ margin: `5px` }}>
						{plan.name}
					</h5>
				}
				{selectedPlan && selectedPlan._id == plan._id ? <input style={styles.icon} onClick={deletePlan} type='image' src={deleteIcon} alt='delete btn' /> : ''}
			</div>
			{selectedPlan != null && schedule != null && plan._id === schedule._id ? showDates() : ''}
		</div>
	);
};

export default Plan;
