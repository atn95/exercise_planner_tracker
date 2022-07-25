import { useState } from 'react';

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

	const saveData = (e) => {
		e.preventDefault();
		console.log(`saved`, exerciseRecord);
	};

	const setWeight = (e) => {};

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
										value={''}
										placeholder='0kg'
										onChange={setWeight}
										type='text'
										name='weight'></input>
								</div>
								<div>
									<input style={styles.input} type='text' name='reps'></input>
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
