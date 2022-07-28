import { styles as containerStyle } from '../components/styles/DoublePanel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = ({ user }) => {
	let [hasWorkout, setHasWorkout] = useState(false);

	const styles = {
		h1: {
			fontSize: window.innerWidth < 600 ? `35px` : '60px',
		},
		h2: {
			fontSize: window.innerWidth < 600 ? `25px` : '50px',
		},
	};
	let [clock, setClock] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => setClock(new Date()), 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		//load plans
		const getPlansByUser = async () => {
			let schedule = await axios.get(`http://127.0.0.1:3001/plan/id`, { params: { planId: user.plan._id } });
			let day = new Date().getDay();
			if (schedule.data[0].schedule[day].exercise.length > 0) {
				setHasWorkout(true);
			}
		};
		getPlansByUser();
	}, []);

	return (
		<div style={{ ...containerStyle.container, border: '2px solid black', minHeight: `500px`, borderRadius: `30px`, flexDirection: `column`, justifyContent: `flex-start` }}>
			<h2 style={styles.h2}>Welcome {user.username}</h2>
			<h1 style={styles.h1}>{clock.toLocaleTimeString()}</h1>
			<h2 style={styles.h2}>{clock.toLocaleDateString()}</h2>
			<h2>Plan: {user.plan? user.plan.name: 'no current plan'}</h2>
			<h2>{hasWorkout ? <Link to='/workout'>You've got a session scheduled today</Link> : ''}</h2>
		</div>
	);
};

export default Home;
