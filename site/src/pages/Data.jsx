import ExercisePanel from '../components/data/ExercisePanel';
import ChartPanel from '../components/data/ChartPanel';
import { useState, useEffect } from 'react';
import { dataPageStyles as styles } from '../components/styles/dataStyle';
import axios from 'axios';
import moment from 'moment';
import 'chartjs-adapter-moment';
import { Chart } from 'chart.js';

const Data = ({ user }) => {
	let [selected, setSelected] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [data, setData] = useState([]);
	let [userRecords, setUserRecords] = useState([]); //data for chart
	let [workoutRecords, setWorkoutRecords] = useState(null);

	const getExerciseHistory = async () => {
		console.log(moment(new Date()));
		let resp = await axios.get('http://127.0.0.1:3001/recordbyexercise', { params: { exerciseId: selected._id, userId: user._id } });
		let mapped = resp.data.map((rec) => {
			let heaviest = 0;
			rec.sets.forEach((set) => {
				if (set.weight > heaviest) {
					heaviest = set.weight;
				}
			});
			return { weight: heaviest, date: new Date(rec.createdAt) };
		});
		mapped.sort((a, b) => {
			return a.date.getTime() - b.date.getTime();
		});
		console.log(mapped[0].date.toISOString());
		setData(mapped);
		setWorkoutRecords(resp.data);
		let chartdata = {
			label: data.map((d) => {
				console.log(d.date);
				return d.date;
			}),
			datasets: [
				{
					label: `${selected.name} Progess`,
					data: data.map((d) => {
						console.log(d.weight);
						return d.weight;
					}),
				},
			],
		};
		setUserRecords(chartdata);
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
			<div style={styles.rightPanel}>{selected && data.length > 0 && userRecords ? <ChartPanel chartData={userRecords} /> : ''}</div>
		</div>
	);
};

export default Data;
