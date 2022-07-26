import { Link } from 'react-router-dom';

const LoginForm = ({ submit, userChange, passChange, userValue, passValue }) => {
	const styles = {
		formStyle: {
			display: `flex`,
			flexDirection: `column`,
			alignItems: `center`,
			justifyContent: `center`,
		},
		formItem: {
			width: `min(300px, 90%)`,
			margin: `0px auto`,
			minHeight: `25px`,
			textAlign: `left`,
		},
		buttonDiv: {
			display: `flex`,
			justifyContent: `space-between`,
			width: `min(300px, 90%)`,
		},
		linkStyle: {
			textDecoration: `none`,
			color: `black`,
		},
		btnStyle: {
			width: `50%`,
			height: `25px`,
		},
	};
	return (
		<form onSubmit={submit} style={styles.formStyle}>
			<label style={styles.formItem} htmlFor='username'>
				username:{' '}
			</label>
			<input style={styles.formItem} type='text' name='username' onChange={userChange} value={userValue} />
			<label style={styles.formItem} htmlFor='password'>
				password:{' '}
			</label>
			<input style={styles.formItem} type='password' name='password' onChange={passChange} passValue={passValue} />
			<div>
				<input type='checkbox' name='persist' />
				<label htmlFor='persist'>keep me logged in</label>
			</div>
			<div style={styles.buttonDiv}>
				<button style={styles.btnStyle} type='submit'>
					Login
				</button>
				<button style={styles.btnStyle}>
					<Link to='/register' style={styles.linkStyle}>
						Register
					</Link>
				</button>
			</div>
		</form>
	);
};

export default LoginForm;
