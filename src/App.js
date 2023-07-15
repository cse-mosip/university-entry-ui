import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
import GuestRegistration from './pages/GuestRegistration';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminView from './pages/AdminView';
import DeviceSetup from './pages/DeviceSetup';
import TopBar from './components/topBar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login/>} path='/login'/>
				<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration/></RouteAuthMiddleware>} path='guest-registration'/>
				<Route element={<RouteAuthMiddleware role={'role'}><AdminView/></RouteAuthMiddleware>} path='/admin'/>
				<Route element={<Home/>} path='/'/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
