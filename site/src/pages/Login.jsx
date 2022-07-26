import LoginForm from '../components/login/LoginForm';
const Login = ({ submit, userChange, passChange, userValue, passValue }) => {
	const styles = {
		container: {
			width: `min(800px, 85%)`,
			margin: `10px auto`,
			border: `2px solid black`,
			paddingTop: `20px`,
			paddingBottom: `20px`,
		},
	};
	return (
		<div style={styles.container}>
			<h4> Login:</h4>
			<LoginForm userValue={userValue} passValue={passValue} passChange={passChange} userChange={userChange} submit={submit} />
		</div>
	);
};

export default Login;
