import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
import GuestRegistration from './pages/GuestRegistration';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login/>} path='/login'/>
				<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration/></RouteAuthMiddleware>} path='guest-registration'/>
				<Route element={<Home/>} path='/'/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
