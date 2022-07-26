import { useState } from 'react';
import axios from 'axios';

const AddExercise = ({ close, addExercise }) => {
	const styles = {
		container: {
			position: `fixed`,
			width: `min(1400px, 90%)`,
			top: `100px`,
			left: `50%`,
			transform: `translateX(-50%)`,
			border: `2px solid black`,
			minHeight: `150px`,
			backgroundColor: `white`,
		},
		header: {
			paddingLeft: `15px`,
			display: `flex`,
			justifyContent: `space-between`,
		},
		closeBtn: {
			width: `62.5px`,
		},
		form: {
			margin: `0 auto`,
			width: `min(600px, 80%)`,
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `space-around`,
			paddingBottom: `20px`,
		},
		formItem: {
			minHeight: `30px`,
		},
		error: {
			color: `red`,
		},
	};

	let [exerciseName, setExerciseName] = useState(``);
	let [exerciseReps, setExerciseReps] = useState(``);
	let [exerciseSets, setExerciseSets] = useState(``);
	let [error, setError] = useState(``);
	let [units, setUnits] = useState(``);

	const saveExercise = async (e) => {
		e.preventDefault();
		let exercise = { name: exerciseName, sets: parseInt(exerciseSets), reps: parseInt(exerciseReps), units: units };
		let res = await axios.post(`http://127.0.0.1:3001/addexercise`, exercise);
		addExercise(exercise);
		console.log(res);
		if (res.data.message == 'saved') {
			close();
		} else {
			//error message display
			setError(res.message);
		}
	};

	const handleNameInput = (e) => {
		e.preventDefault();
		setExerciseName(e.target.value);
	};

	const handleSetsInput = (e) => {
		e.preventDefault();
		setExerciseSets(e.target.value);
	};
	const handleRepsInput = (e) => {
		e.preventDefault();
		setExerciseReps(e.target.value);
	};
	const handleUnitsInput = (e) => {
		e.preventDefault();
		setUnits(e.target.value);
	};

	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<h3>Add Exercise: </h3>{' '}
				<button style={styles.closeBtn} onClick={close}>
					x
				</button>
			</div>
			<form onSubmit={saveExercise}>
				<div style={styles.form}>
					<h4 style={styles.error}>{error}</h4>
					<label style={styles.formItem} htmlFor='exercisename'>
						Exercise Name:{' '}
					</label>
					<input style={styles.formItem} type='text' value={exerciseName} onChange={handleNameInput} name='exercisename' />
					<label style={styles.formItem} htmlFor='sets'>
						sets:{' '}
					</label>
					<input style={styles.formItem} type='text' onChange={handleSetsInput} value={exerciseSets} name='sets' />
					<label style={styles.formItem} htmlFor='reps'>
						reps:{' '}
					</label>
					<input style={styles.formItem} type='text' value={exerciseReps} onChange={handleRepsInput} name='reps' />
					<label style={styles.formItem} htmlFor='reps'>
						Units:{' '}
					</label>
					<input style={styles.formItem} type='text' onChange={handleUnitsInput} value={units} name='reps' />
					<br />
					<button style={styles.formItem} type='submit'>
						save
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddExercise;
