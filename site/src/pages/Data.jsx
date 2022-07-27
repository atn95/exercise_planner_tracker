import ExercisePanel from '../components/data/ExercisePanel';
import { useState, useEffect } from 'react';
import { dataPageStyles as styles } from '../components/styles/dataStyle';
import axios from 'axios';

const Data = ({ user }) => {
	let [selected, setSelected] = useState(null);
	let [loaded, setLoaded] = useState(false);

	const getExerciseHistory = async () => {
		let resp = await axios.get('http://127.0.0.1:3001/recordbyexercise', { params: { exerciseId: selected._id, userId: user._id } });
		console.log(resp.data);
	};

	useEffect(() => {
		if (loaded) {
			getExerciseHistory();
		} else {
			setLoaded(true);
		}
	}, [selected, loaded]);

	return (
		<div style={styles.container}>
			<div style={styles.leftPanel}>
				<ExercisePanel user={user} selected={selected} setSelected={setSelected} />
			</div>
			<div style={styles.rightPanel}>Right</div>
		</div>
	);
};

export default Data;
