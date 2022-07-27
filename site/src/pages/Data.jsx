import ExercisePanel from '../components/data/ExercisePanel';
import { dataPageStyles as styles } from '../components/styles/dataStyle';

const Data = ({ user }) => {
	return (
		<div style={styles.container}>
			<div style={styles.leftPanel}>
				<ExercisePanel />
			</div>
			<div style={styles.rightPanel}>Right</div>
		</div>
	);
};

export default Data;
