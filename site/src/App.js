import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Workout from './components/Workout';
import Data from './components/Data';

function App() {
	return (
		<div className='App'>
			<Header />
			<br />
			<br />
			<br />
			<br />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/workout' element={<Workout />} />
				<Route path='/data' element={<Data />} />
			</Routes>
		</div>
	);
}

export default App;
