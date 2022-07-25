import { styles } from './styles/DoublePanel';

const Home = () => {
	return (
		<div style={styles.container}>
			<div style={styles.rightPanel}>
				Left Panel
				<br />
				<br />
			</div>
			<div style={styles.leftPanel}>
				Right Panel
				<br />
				<br />
			</div>
		</div>
	);
};

export default Home;
