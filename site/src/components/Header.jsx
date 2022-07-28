import React from 'react';
import { Link } from 'react-router-dom';
import homeImg from '../assets/home.png';
import workoutImg from '../assets/workout.png';
import dataImg from '../assets/data.png';

const Header = ({ setUser, user }) => {
	const styles = {
		container: {
			zIndex: `999`,
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
			fontSize: window.innerWidth < 600 ? `14px` : `25px`,
			textDecoration: `none`,
			color: `white`,
			marginLeft: `15px`,
		},
		img: {
			objectFit: `cover`,
			width: window.innerWidth < 600 ? `25px` : `32px`,
			height: window.innerWidth < 600 ? `25px` : `32px`,
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

	const logout = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

	return (
		<div style={styles.headerContainer}>
			<header style={styles.container}>
				<Link to='/' style={styles.navItem}>
					<img style={styles.img} src={homeImg} /> {window.innerWidth < 600 ? `` : 'Home'}
				</Link>
				<Link to='/workout' style={styles.navItem}>
					<img style={styles.img} src={workoutImg} />
					{window.innerWidth < 600 ? `` : 'Workout'}
				</Link>
				<Link to='/data' style={styles.navItem}>
					<img style={styles.img} src={dataImg} />
					{window.innerWidth < 600 ? `` : 'Data'}
				</Link>
				{user ? (
					<div style={styles.navItem} onClick={logout}>
						Logout
					</div>
				) : (
					''
				)}
			</header>
		</div>
	);
};

export default Header;
