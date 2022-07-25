import { useState, useEffect } from 'react';

const Exercise = ({ exercise }) => {
	const styles = {
		container: {
			display: `flex`,
			flexDirection: `column`,
		},
		set: {
			display: `flex`,
			justifyContent: `space-around`,
			marginLeft: `10px`,
		},
		input: {
			width: `50px`,
		},
		saveBtn: {
			margin: `20px auto`,
			width: `90px`,
			height: `40px`,
		},
	};

	let [exerciseRecord, setExerciseRecord] = useState(exercise);

	useEffect(() => {
		setExerciseRecord(exercise);
	}, [exercise]);

	const saveData = (e) => {
		e.preventDefault();
		//TODO: save to database
		console.log(`saved`, exerciseRecord);
	};

	const setWeight = (e, index) => {
		e.preventDefault();
		let tempDataRecord = { ...exerciseRecord };
		tempDataRecord[index].weight = e.target.value;
		setExerciseRecord(tempDataRecord);
		console.log(index);
	};

	const setReps = (e, index) => {
		e.preventDefault();
		let tempDataRecord = { ...exerciseRecord };
		tempDataRecord[index].reps = e.target.value;
		setExerciseRecord(tempDataRecord);
		console.log(index);
	};

	return (
		<div style={styles.container}>
			<form onSubmit={saveData} method='get'>
				{exercise
					? exercise.map((set) => (
							<div style={styles.set}>
								<label>Set: {set.set + 1}</label>
								<div>
									weight:{' '}
									<input
										style={styles.input}
										value={
											exerciseRecord
												? exerciseRecord[exercise.indexOf(set)].weight
												: ``
										}
										placeholder='0 lbs'
										onChange={(e) => {
											setWeight(e, exercise.indexOf(set));
										}}
										type='text'
										name='weight'></input>
								</div>
								<div>
									<input
										style={styles.input}
										value={
											exerciseRecord
												? exerciseRecord[exercise.indexOf(set)].reps
												: ``
										}
										onChange={(e) => {
											setReps(e, exercise.indexOf(set));
										}}
										type='text'
										name='reps'></input>
									{' ' + set.units}
								</div>
							</div>
					  ))
					: ``}
				{exercise ? (
					<button style={styles.saveBtn} type='submit'>
						save
					</button>
				) : (
					``
				)}
			</form>
		</div>
	);
};

export default Exercise;
