import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
import GuestRegistration from './pages/GuestRegistration';
import Login from './pages/Login';
import Home from './pages/Home';
import StudentCard from './pages/studentDetails';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login/>} path='/login'/>
				<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration/></RouteAuthMiddleware>} path='guest-registration'/>
				<Route element={<Home/>} path='/'/>
        <Route element={<StudentCard/>} path='/stud'/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
