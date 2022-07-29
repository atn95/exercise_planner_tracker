import { styles as containerStyle } from '../components/styles/DoublePanel';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = ({ user }) => {
	let [hasWorkout, setHasWorkout] = useState(false);

	const styles = {
		h1: {
			fontSize: window.innerWidth < 600 ? `40px` : '80px',
			margin: `10px`,
			fontWeight: `500`,
		},
		h2: {
			fontSize: window.innerWidth < 600 ? `25px` : '60px',
			margin: `5px`,
			fontWeight: '300',
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
		<div style={{ ...containerStyle.container, border: '2px solid black', minHeight: `500px`, borderRadius: `10px`, flexDirection: `column`, justifyContent: `flex-start`, backgroundColor: `white` }}>
			<p style={styles.h2}>Welcome {user.username}</p>
			<p style={styles.h1}>{clock.toLocaleTimeString()}</p>
			<p style={styles.h2}>{clock.toLocaleDateString()}</p>
			<p style={styles.h2}>Plan: {user.plan ? user.plan.name : 'no current plan'}</p>
			<p>
				{hasWorkout ? (
					<Link className='workoutplan' to='/workout'>
						<p style={styles.h2}>You've got a session scheduled today</p>
					</Link>
				) : (
					''
				)}
			</p>
		</div>
	);
};

export default Home;
