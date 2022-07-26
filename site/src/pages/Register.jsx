import { useState, useEffect } from 'react';

const Register = () => {
	const styles = {
		container: {
			width: `min(800px, 85%)`,
			margin: `10px auto`,
			border: `2px solid black`,
			paddingTop: `20px`,
			paddingBottom: `20px`,
		},
		form: {
			width: `min(600px, 85%)`,
			margin: `10px auto`,
			display: `flex`,
			flexDirection: `column`,
			alignItems: `center`,
		},
		formItem: {
			marginTop: `5px`,
			width: `70%`,
			height: `25px`,
		},
		err: {
			color: `red`,
		},
	};

	let [message, setMessage] = useState('');
	let [submited, setSubmited] = useState(false);
	let [err, setErr] = useState('');

	useState(() => {
		const register = async () => {
			if (submited) {
				setSubmited(false);
			}
		};
		register();
	}, [submited]);

	const register = (e) => {
		e.preventDefault();
		setSubmited(true);
	};
	return (
		<div style={styles.container}>
			<div>Register</div>
			<form onSubmit={register} style={styles.form}>
				<label style={styles.formItem} htmlFor='username'>
					Username:{' '}
				</label>
				<input style={styles.formItem} type='text' name='username' />
				<label style={styles.formItem} htmlFor='username'>
					Password:{' '}
				</label>
				<input style={styles.formItem} type='password' name='password' />
				<label style={styles.formItem} htmlFor='email'>
					email:{' '}
				</label>
				<input style={styles.formItem} type='text' name='email' />
				<button style={styles.formItem} type='submit'>
					register
				</button>
			</form>
		</div>
	);
};

export default Register;
