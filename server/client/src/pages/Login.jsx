import LoginForm from '../components/login/LoginForm';
const Login = ({ submit, userChange, passChange, userValue, passValue, keepLoginHandler, persist, errMsg }) => {
	const styles = {
		container: {
			width: `min(800px, 85%)`,
			margin: `10px auto`,
			border: `2px solid black`,
			paddingTop: `20px`,
			paddingBottom: `20px`,
			backgroundColor: `rgb(240,240,240)`,
			borderRadius: `10px`,
		},
	};
	return (
		<div style={styles.container}>
			<h5>{errMsg}</h5>
			<h4> Login:</h4>
			<LoginForm persist={persist} userValue={userValue} keepLoginHandler={keepLoginHandler} passValue={passValue} passChange={passChange} userChange={userChange} submit={submit} />
		</div>
	);
};

export default Login;
