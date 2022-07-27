import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Workout from './pages/Workout';
import Data from './pages/Data';
import PlanManager from './pages/PlanManager';
import { useState, useEffect } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';

function App() {
	let [user, setUser] = useState(null);
	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');
	let [persist, setPersist] = useState(true);
	let [loginAtempt, setLoginAtempt] = useState(false);
	let [err, setErr] = useState('');

	useEffect(() => {
		if (localStorage.getItem(`user`)) {
			setUser(JSON.parse(localStorage.getItem(`user`)));
		} else {
			console.log(`doesnt have user`);
		}
	}, []);

	const login = (e) => {
		e.preventDefault();
		console.log(`logging in `);
		setLoginAtempt(true);
	};

	const handleUsernameChange = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const handleKeepLogin = (e) => {
		console.log(persist);
		setPersist(e.target.checked);
	};

	useEffect(() => {
		const userLogin = async () => {
			if (loginAtempt) {
				console.log(`in Use effect`);
				setLoginAtempt(false);
				let u = { username: username, password: password };
				console.log(u);
				let resp = await axios.post('http://127.0.0.1:3001/login', u);
				console.log(resp);
				if (resp.data.message == 'success') {
					setUser(resp.data);
					if (persist) {
						localStorage.setItem('user', JSON.stringify(resp.data));
					}
				} else {
					setErr(resp.data.message);
				}
			}
		};
		userLogin();
	}, [loginAtempt]);

	return (
		<div className='App'>
			<Header user={user} setUser={setUser} />
			<br />
			<br />
			<br />
			<br />
			{user ? (
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/workout' element={<Workout />} />
					<Route path='/data' element={<Data />} />
					<Route path='/addplan' element={<PlanManager />} />
				</Routes>
			) : (
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/*' element={<Login errMsg={err} persist={persist} keepLoginHandler={handleKeepLogin} userValue={username} passValue={password} passChange={handlePasswordChange} userChange={handleUsernameChange} submit={login} />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
