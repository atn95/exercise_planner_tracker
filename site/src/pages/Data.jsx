import ExercisePanel from '../components/data/ExercisePanel';
import { useState } from 'react';
import { dataPageStyles as styles } from '../components/styles/dataStyle';

const Data = ({ user }) => {
	let [selected, setSelected] = useState(null);

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
