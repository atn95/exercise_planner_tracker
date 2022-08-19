import ExercisePanel from '../components/data/ExercisePanel'
import ChartPanel from '../components/data/ChartPanel'
import { useState, useEffect } from 'react'
import { dataPageStyles as styles } from '../components/styles/dataStyle'
import axios from 'axios'

const Data = ({ user }) => {
	let [selected, setSelected] = useState(null)
	let [loaded, setLoaded] = useState(false)
	let [data, setData] = useState([])
	let [userRecords, setUserRecords] = useState(null) //data for chart
	let [chartOptions, setChartOptions] = useState(null)

	const getExerciseHistory = async () => {
		let resp = await axios.get('/api/recordbyexercise', {
			params: { exerciseId: selected._id, userId: user._id },
		})
		let mapped = resp.data.map((rec) => {
			let heaviest = 0
			let mostreps = 0
			rec.sets.forEach((set) => {
				if (set.weight > heaviest) {
					heaviest = set.weight
				}
				if (set.reps > mostreps) {
					mostreps = set.reps
				}
			})
			return {
				weight: heaviest,
				date: new Date(rec.createdAt),
				units: rec.sets[0].units,
				reps: mostreps,
			}
		})
		mapped.sort((a, b) => {
			return a.date.getTime() - b.date.getTime()
		})
		setData(mapped)
	}

	useEffect(() => {
		if (data.length > 0 && loaded) {
			let chartdata = {
				datasets: [
					{
						borderColor: '#e95151',
						pointRadius: 5,
						pointHoverRadius: 10,
						label: `${selected.name} weight Progess`,
						data: data.map((d) => {
							return { x: d.date.toISOString(), y: d.weight }
						}),
					},
					{
						borderColor: '#e95151',
						pointRadius: 5,
						pointHoverRadius: 10,
						label: `${selected.name} reps Progess`,
						data: data.map((d) => {
							return { x: d.date.toISOString(), y: d.reps }
						}),
					},
				],
			}

			let options = {
				scales: {
					x: {
						type: 'time',
					},
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: 'Weight in ' + data[0].units,
						},
					},
				},
			}
			setChartOptions(options)
			setUserRecords(chartdata)
		}
	}, [loaded, data])

	useEffect(() => {
		if (loaded) {
			getExerciseHistory()
		} else {
			setLoaded(true)
		}
	}, [selected, loaded])

	return (
		<div style={styles.container}>
			<div style={styles.leftPanel}>
				<ExercisePanel user={user} selected={selected} setSelected={setSelected} />
			</div>
			<div style={styles.rightPanel}>
				{userRecords && chartOptions ? (
					<ChartPanel chartData={userRecords} chartOptions={chartOptions} />
				) : (
					``
				)}
			</div>
		</div>
	)
}

export default Data
