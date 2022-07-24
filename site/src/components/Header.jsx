import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/home.png';
import workoutImg from '../assets/workout.png';
import dataImg from '../assets/data.png';

const Header = () => {
	const styles = {
		container: {
			display: 'flex',
			justifyContent: `flex-end`,
			backgroundColor: `black`,
			position: `relative`,
			width: `min(1400px, 80%)`,
			alignItems: `center`,
			margin: `0 auto`,
		},
		navItem: {
			padding: `1rem`,
			fontSize: `25px`,
			textDecoration: `none`,
			color: `white`,
			marginLeft: `15px`,
		},
		img: {
			objectFit: `cover`,
			width: `32px`,
			height: `32px`,
		},
		headerContainer: {
			margin: `0 auto`,
			width: `100%`,
			backgroundColor: `black`,
			position: `fixed`,
			left: `0`,
			top: `0`,
		},
	};
	return (
		<div style={styles.headerContainer}>
			<header style={styles.container}>
				<Link to='/' style={styles.navItem}>
					<img style={styles.img} src={homeImg} /> Home
				</Link>
				<Link to='/workout' style={styles.navItem}>
					<img style={styles.img} src={workoutImg} />
					Workout
				</Link>
				<Link to='/data' style={styles.navItem}>
					<img style={styles.img} src={dataImg} />
					Data
				</Link>
			</header>
		</div>
	);
};

export default Header;
