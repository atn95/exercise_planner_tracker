import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Workout from './components/workout/Workout';
import Data from './components/Data';
import AddPlanPage from './components/workout/AddPlanPage';

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
				<Route path='/addplan' element={<AddPlanPage />} />
			</Routes>
		</div>
	);
}

export default App;
