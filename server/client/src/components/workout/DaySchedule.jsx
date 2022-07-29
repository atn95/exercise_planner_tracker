import Search from './Search';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AddExercise from './AddExercise';
import deleteIcon from '../../assets/delete.png';
import addIcon from '../../assets/add.png';

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
		icon: {
			width: `32px`,
			height: `32px`,
		},
	};

	let [exerciseList, setExerciseList] = useState([]);
	let [searched, setSearched] = useState(false);
	let [showAddExerciseWindow, setShowAddExerciseWindow] = useState(false);
	let [searchQuery, setSearchQuery] = useState(``);

	const pullExercise = async () => {
		let searchTerm = searchQuery.split(` `).join(`%20`);
		let exercises = searchQuery.length > 0 ? await axios.get('/api/search/' + searchTerm) : await axios.get('/api/getexercise');
		setSearched(false);
		setExerciseList(exercises.data);
	};

	useEffect(() => {
		pullExercise();
	}, [searched]);

	const searchExercise = (e) => {
		e.preventDefault();
		setSearched(true);
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

	const handleSearchQuery = (e) => {
		e.preventDefault();
		setSearchQuery(e.target.value);
	};

	return (
		<div style={styles.container}>
			{showAddExerciseWindow ? <AddExercise close={hideAddWindow} addExercise={addNewExercise} /> : ``}
			<div>
				<h3>{day.day}: </h3>
			</div>
			<div className='plan-exercise'>
				{day.exercise.map((ex) => (
					<div style={styles.exercise}>
						<h5 style={styles.exerciseText}>
							{ex.name}: {ex.sets} x {ex.reps}
						</h5>
						<input style={styles.icon} onClick={() => removeExercise(ex)} type='image' src={deleteIcon} alt='Delete Icon' />
					</div>
				))}
			</div>
			<div style={styles.search}>
				<Search searchQuery={searchQuery} onChange={handleSearchQuery} onSubmit={searchExercise} />
			</div>
			<div className='search-result'>
				{exerciseList.map((ex) => (
					<div style={styles.exercise}>
						<h5 style={styles.exerciseText}>
							{ex.name}: {ex.sets} x {ex.reps}
						</h5>
						<input style={styles.icon} onClick={() => addExercise(ex)} type='image' src={addIcon} alt='Add icon' />
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
