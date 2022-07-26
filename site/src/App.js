import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Workout from './pages/Workout';
import Data from './pages/Data';
import PlanManager from './pages/PlanManager';
import { useState } from 'react';
import Login from './pages/Login';

function App() {
	let [user, setUser] = useState(null);

	let [username, setUsername] = useState('');
	let [password, setPassword] = useState('');

	const login = (e) => {
		e.preventDefault();
		console.log(`submitted`);
		console.log(`username:`, username, `password:`, password);
	};

	const handleUsernameChange = (e) => {
		e.preventDefault();
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	return (
		<div className='App'>
			<Header />
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
					<Route path='/register' element={<div>Register page</div>} />
					<Route path='/*' element={<Login userValue={username} passValue={password} passChange={handlePasswordChange} userChange={handleUsernameChange} submit={login} />} />
				</Routes>
			)}
		</div>
	);
}

export default App;
