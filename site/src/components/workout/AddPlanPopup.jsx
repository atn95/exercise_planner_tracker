import { useState } from 'react';

const AddPlanPopup = ({ close, addPlan }) => {
	const styles = {
		container: {
			position: `fixed`,
			width: `min(1400px, 90%)`,
			top: `100px`,
			left: `50%`,
			transform: `translateX(-50%)`,
			border: `2px solid red`,
			minHeight: `100px`,
			backgroundColor: `white`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `space-evenly`,
			paddingBottom: `15px`,
			paddingTop: `0`,
		},
		closeBtn: {
			width: `62.5px`,
			margin: `0`,
		},
		header: {
			display: `flex`,
			justifyContent: `space-between`,
			padding: `0`,
		},
		label: {
			paddingLeft: `10px`,
		},
		formStyle: {
			display: `flex`,
			flexDirection: `column`,
			width: `min(50%, 600px)`,
			justifyContent: `space-around`,
			margin: `0 auto`,
			minHeight: `200px`,
		},
		formItem: {
			height: `30px`,
		},
	};

	let [planName, setPlanName] = useState('');

	const savePlan = (e) => {
		e.preventDefault();
		//addPlanToDatabase

		addPlan({ name: planName, id: `2312435` });
		close();
	};

	const handleTitleInput = (e) => {
		e.preventDefault();
		setPlanName(e.target.value);
		console.log(planName);
	};

	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<div style={styles.label}>
					<h3>Add Plan:</h3>{' '}
				</div>
				<div onClick={close} className='close' style={styles.closeBtn}>
					<h3>X</h3>
				</div>
			</div>
			<div>
				<form onSubmit={savePlan} style={styles.formStyle}>
					<label htmlFor='Plan Name'>Plan Name:</label>
					<input
						onChange={handleTitleInput}
						style={styles.formItem}
						type='text'
						name='planname'
					/>
					<button style={styles.formItem} type='submit'>
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddPlanPopup;
