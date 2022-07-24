const Home = () => {
	let styles = {
		container: {
			display: `flex`,
			justifyContent: `space-around`,
			width: `min(1400px, 90%)`,
			margin: `0 auto`,
		},
		rightPanel: {
			width: `45%`,
			border: `2px solid black`,
			marginTop: `20px`,
			borderRadius: `10px`,
		},
		leftPanel: {
			width: `45%`,
			border: `2px solid black`,
			marginTop: `20px`,
			borderRadius: `10px`,
		},
	};
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
