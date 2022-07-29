import axios from 'axios';
import { useState, useEffect } from 'react';

const Register = () => {
	const styles = {
		container: {
			width: `min(800px, 85%)`,
			margin: `10px auto`,
			border: `2px solid black`,
			paddingTop: `20px`,
			paddingBottom: `20px`,
			borderRadius: `10px`,
			backgroundColor: `rgb(240,240,240)`,
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
	//0 = username, 1= password, 2 = email
	let [formValue, setFormValue] = useState([``, ``, ``]);

	useEffect(() => {
		const register = async () => {
			if (submited) {
				let canSubmit = true;
				if (formValue[1].length < 8) {
					setErr(err + ' Password not 8 Character');
					canSubmit = false;
				}
				if (!formValue[2].includes('@')) {
					setErr(err + ' Invalid email');
					canSubmit = false;
				}
				if (canSubmit) {
					let response = await axios.post('http://localhost:3001/register', { username: formValue[0], password: formValue[1], email: formValue[2] });
					if (response.data.message != 'success') {
						setErr(response.data.message);
					} else {
						setMessage(response.data.message);
					}
				}
				setSubmited(false);
			}
		};
		register();
	}, [submited]);

	const handleInput = (e, index) => {
		e.preventDefault();
		let tempInput = [...formValue];
		tempInput[index] = e.target.value;
		setFormValue(tempInput);
	};

	const register = (e) => {
		e.preventDefault();
		setSubmited(true);
		setErr(``);
		setMessage(``);
	};
	return (
		<div style={styles.container}>
			<div>Register</div>
			<div>
				{message}
				<br />
				<p style={styles.err}>{err}</p>
			</div>
			<form onSubmit={register} style={styles.form}>
				<label style={styles.formItem} htmlFor='username'>
					Username:{' '}
				</label>
				<input style={styles.formItem} value={formValue[0]} onChange={(e) => handleInput(e, 0)} type='text' name='username' />
				<label style={styles.formItem} htmlFor='username'>
					Password:{' '}
				</label>
				<input style={styles.formItem} value={formValue[1]} onChange={(e) => handleInput(e, 1)} type='password' name='password' />
				<label style={styles.formItem} htmlFor='email'>
					email:{' '}
				</label>
				<input style={styles.formItem} value={formValue[2]} onChange={(e) => handleInput(e, 2)} type='text' name='email' />
				<button style={styles.formItem} type='submit'>
					register
				</button>
			</form>
		</div>
	);
};

export default Register;
