import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Workout from './components/workout/Workout';
import Data from './components/Data';
import AddPlan from './components/workout/AddPlan';

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
				<Route path='/addplan' element={<AddPlan />} />
			</Routes>
		</div>
	);
}

export default App;
