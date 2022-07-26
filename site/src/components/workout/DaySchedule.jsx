import Search from './Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddExercise from './AddExercise';

const DaySchedule = ({ day, addExercise, removeExercise }) => {
	const styles = {
		container: {
			display: `block`,
			textAlign: `left`,
			paddingLeft: `10px`,
			paddingBottom: `15px`,
		},
		exercise: {
			display: `flex`,
			justifyContent: `space-between`,
			width: `90%`,
			border: `2px solid black`,
			padding: `5px`,
			margin: `0 auto`,
		},
		exerciseText: {
			margin: `5px`,
		},
		search: {
			width: `90%`,
			margin: `10px auto`,
		},
	};

	let [exerciseList, setExerciseList] = useState([]);
	let [searched, setSearched] = useState(false);
	let [showAddExerciseWindow, setShowAddExerciseWindow] = useState(false);

	const pullExercise = async () => {
		let exercises = await axios.get('http://localhost:3001/getexercise');
		console.log(exercises.data);
		setExerciseList(exercises.data);
	};

	useEffect(() => {
		pullExercise();
	}, [searched]);

	const searchExercise = (e) => {
		e.preventDefault();
		console.log(`searching`);
		//search
	};

	const hideAddWindow = () => {
		setShowAddExerciseWindow(false);
	};

	const showAddWindow = () => {
		setShowAddExerciseWindow(true);
	};

	const addNewExercise = (exercise) => {
		setExerciseList([exercise, ...exerciseList]);
	};

	return (
		<div style={styles.container}>
			{showAddExerciseWindow ? <AddExercise close={hideAddWindow} addExercise={addNewExercise} /> : ``}
			<div>
				<h3>{day.day}: </h3>
			</div>
			{day.exercise.map((ex) => (
				<div style={styles.exercise}>
					<h5 style={styles.exerciseText}>
						{ex.name}: {ex.sets} x {ex.reps}
					</h5>
					<button onClick={() => removeExercise(ex)}>-</button>
				</div>
			))}
			<div style={styles.search}>
				<Search onSubmit={searchExercise} />
			</div>
			<div>
				{exerciseList.map((ex) => (
					<div style={styles.exercise}>
						<h5 style={styles.exerciseText}>
							{ex.name}: {ex.sets} x {ex.reps}
						</h5>
						<button onClick={() => addExercise(ex)}>+</button>
					</div>
				))}
			</div>
			<div style={styles.search}>
				<button onClick={showAddWindow} style={styles.exercise} className='add'>
					Add
				</button>
			</div>
		</div>
	);
};

export default DaySchedule;
