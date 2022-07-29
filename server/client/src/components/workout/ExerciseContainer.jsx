const ExerciseContainer = ({ exercises, selectedExercise, setExercise }) => {
	let styles = {
		container: {
			display: `flex`,
			flexDirection: `column`,
			justifyContent: `space-between`,
			paddingBottom: `10px`,
		},
		ContainerTitle: {
			textAlign: `left`,
			paddingLeft: `10px`,
		},
		exerciseCont: {
			padding: `0px`,
			margin: `5px auto 5px auto`,
			width: `90%`,
			border: `2px solid black`,
		},
		left: {
			textAlign: `left`,
			padding: `0px`,
			paddingLeft: `10px`,
			marginTop: `5px`,
			marginBottom: `5px`,
			fontWeight: `200px`,
		},
	};
	return (
		<div style={styles.container}>
			<h3 style={styles.ContainerTitle}>Workout:</h3>
			{exercises.map((ex) => (
				<div onClick={() => setExercise(ex)} style={styles.exerciseCont} className={selectedExercise && ex._id == selectedExercise._id ? `selected` : ``}>
					<h4 style={styles.left}>
						{ex.name} {ex.sets}x{ex.reps}
					</h4>
				</div>
			))}
		</div>
	);
};

export default ExerciseContainer;
