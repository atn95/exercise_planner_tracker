import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/data.css';

const ExercisePanel = ({ user, setSelected, selected }) => {
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
			display: `flex`,
			justifyContent: `center`,
		},
		exercise: {
			width: `90%`,
			border: `2px solid black`,
			margin: `5px auto`,
		},
	};

	let [exerciseRecord, setExerciseRecord] = useState([]);
	let [exerciseOpened, setExerciseOpened] = useState(true);

	const toggleExercise = () => {
		setExerciseOpened(!exerciseOpened);
	};
	const loadUniqueExercise = async () => {
		let resp = await axios.get('http://127.0.0.1:3001/recordlist', { params: { userId: user._id } });
		setExerciseRecord(resp.data);
	};

	//load initial exercise
	useEffect(() => {
		loadUniqueExercise();
	}, []);

	const select = (obj) => {
		setSelected(obj);
	};

	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<h4 style={styles.h4}>Exercise List</h4>
				<div style={styles.headerBtn} onClick={toggleExercise}>
					<h4 style={styles.h4}>{exerciseOpened ? `-` : `+`}</h4>
				</div>
			</div>
			<div>
				{exerciseOpened
					? exerciseRecord.map((ex) => (
							<div onClick={() => select(ex)} className={'exercise ' + (selected && selected._id == ex._id ? 'selected' : '')} style={styles.exercise}>
								{ex.name}
							</div>
					  ))
					: ''}{' '}
			</div>
		</div>
	);
};

export default ExercisePanel;
