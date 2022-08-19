import { useState, useEffect } from 'react'
import axios from 'axios'

const Exercise = ({ exercise, user }) => {
	const styles = {
		container: {
			display: `flex`,
			flexDirection: `column`,
		},
		set: {
			display: `flex`,
			justifyContent: `space-around`,
			marginLeft: `10px`,
		},
		input: {
			width: window.innerWidth < 600 ? `33px` : `50px`,
		},
		saveBtn: {
			margin: `20px auto`,
			width: `90px`,
			height: `40px`,
		},
	}

	let [exerciseRecord, setExerciseRecord] = useState(null)
	let [loadlog, setLoadLog] = useState(false)
	let [saving, setSaving] = useState(false)

	useEffect(() => {
		loadTodayLog()
	}, [])

	const loadTodayLog = async () => {
		if (loadlog) {
			let log = await axios.post('/api/log/gettoday', {
				userId: user._id,
				exerciseId: exercise._id,
			})
			console.log(log.data)
			log.data.sets.forEach((set) => {
				if (!set?.weight) {
					set.weight = ''
				}
				if (!set?.reps) {
					set.reps = ''
				}
			})
			setExerciseRecord(log.data)
		} else {
			setLoadLog(true)
		}
	}

	useEffect(() => {
		loadTodayLog()
	}, [exercise, loadlog])

	useEffect(() => {
		const saveToDb = async () => {
			if (saving) {
				let resp = await axios.put('/api/log/save', exerciseRecord)
				setSaving(false)
			}
		}
		saveToDb()
	}, [saving])

	const saveData = (e) => {
		e.preventDefault()
		setSaving(true)
	}

	const setWeight = (e, index) => {
		e.preventDefault()
		let temprecord = { ...exerciseRecord }
		temprecord.sets[index].weight = e.target.value
		setExerciseRecord(temprecord)
	}

	const setReps = (e, index) => {
		e.preventDefault()
		let temprecord = { ...exerciseRecord }
		temprecord.sets[index].reps = e.target.value
		setExerciseRecord(temprecord)
	}

	return (
		<div style={styles.container}>
			<form onSubmit={saveData} method='get'>
				{exerciseRecord
					? exerciseRecord.sets.map((set) => (
							<div style={styles.set}>
								<div>
									<label>Set: {set.set + 1}</label>
								</div>
								<div>
									<label>Weight: </label>
									<input
										onChange={(e) => setWeight(e, set.set)}
										value={set.weight}
										style={styles.input}
										type='text'
										name='weight'
									/>
									<label htmlFor='units'> {set.units}</label>
								</div>
								<div>
									<label>reps: </label>
									<input
										onChange={(e) => setReps(e, set.set)}
										value={set.reps}
										style={styles.input}
										type='text'
										name='reps'
									/>
								</div>
							</div>
					  ))
					: ''}
				{exercise ? (
					<button style={styles.saveBtn} type='submit'>
						save
					</button>
				) : (
					``
				)}
			</form>
		</div>
	)
}

export default Exercise
