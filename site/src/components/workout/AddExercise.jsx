import React from 'react';

const AddExercise = ({ close }) => {
	const styles = {
		container: {
			position: `fixed`,
			width: `min(1400px, 90%)`,
			top: `100px`,
			left: `50%`,
			transform: `translateX(-50%)`,
			border: `2px solid red`,
			minHeight: `200px`,
			backgroundColor: `white`,
		},
	};
	return (
		<div style={styles.container}>
			AddExercise
			<button onClick={close}>x</button>
		</div>
	);
};

export default AddExercise;
