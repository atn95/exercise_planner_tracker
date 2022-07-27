import { useState, useEffect } from 'react';
import axios from 'axios';

const ExercisePanel = () => {
	const styles = {
		container: {
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `flex-start`,
		},
		header: {
			paddingLeft: `10px`,
			textAlign: `left`,
			display: `flex`,
			justifyContent: `space-between`,
		},
		h4: {
			margin: `0`,
			padding: `.5em`,
		},
		headerBtn: {
			width: `38px`,
			height: `38px`,
			border: `2px solid red`,
			display: `flex`,
			justifyContent: `center`,
		},
	};

	let [exerciseRecord, setExerciseRecord] = useState([]);
	let [exerciseOpened, setExerciseOpened] = useState(true);
	const toggleExercise = () => {
		setExerciseOpened(!exerciseOpened);
	};

	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<h4 style={styles.h4}>Exercise List</h4>
				<div style={styles.headerBtn} onClick={toggleExercise}>
					<h4 style={styles.h4}>{exerciseOpened ? `-` : `+`}</h4>
				</div>
			</div>
			{exerciseOpened ? '' : ''}
		</div>
	);
};

export default ExercisePanel;
