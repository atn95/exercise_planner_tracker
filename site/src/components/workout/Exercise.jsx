import React from 'react';

const Exercise = ({ exercise }) => {
	const styles = {
		container: {
			display: `flex`,
			flexDirection: `column`,
		},
		set: {
			display: `flex`,
			justifyContent: `space-between`,
			marginLeft: `10px`,
		},
		input: {
			width: `30px`,
		},
	};

	console.log(exercise);

	return (
		<div style={styles.container}>
			{exercise
				? exercise.map((set) => (
						<div style={styles.set}>
							<div>Set {set.set + 1}:</div>
							<div>
								weight:{' '}
								<input style={styles.input} type='text' name='weight'></input>
							</div>
							<div>
								reps:{` `}
								<input style={styles.input} type='text' name='reps'></input>
							</div>
						</div>
				  ))
				: ``}
		</div>
	);
};

export default Exercise;
