import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
import GuestRegistration from './pages/GuestRegistration';
import Login from './pages/Login';
import DeviceSetup from './pages/DeviceSetup';
import TopBar from './components/topBar';
import Home from './pages/Home';


function App() {
	return (
		<>
			<TopBar />
			<BrowserRouter>
				<Routes>
					<Route element={<Login />} path='/login' />
					<Route element={<DeviceSetup />} path='/device-setup' />
					<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration /></RouteAuthMiddleware>} path='guest-registration' />
					<Route element={<Home />} path='/' />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
