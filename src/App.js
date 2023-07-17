import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
import GuestRegistration from './pages/GuestRegistration';
import StaffRegistration from './pages/StaffRegistration';
import Login from './pages/Login';
import Home from './pages/Home';
import StudentCard from './pages/studentDetails';
import AdminView from './pages/AdminView';
import DeviceSetup from './pages/DeviceSetup';
import TopBar from './components/topBar';

function App() {
	return (
		<>
			<TopBar />
			<BrowserRouter>
				<Routes>
					<Route element={<DeviceSetup />} path='/device-setup' />
					<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration /></RouteAuthMiddleware>} path='guest-registration' />
					<Route element={<RouteAuthMiddleware role={'role'}><StaffRegistration /></RouteAuthMiddleware>} path='staff-registration' />
					<Route element={<RouteAuthMiddleware role={'role'}><AdminView /></RouteAuthMiddleware>} path='entry-management' />
					<Route element={<StudentCard isOpen={true} />} path='/stu' />
					<Route element={<Home />} path='/home' />
					<Route element={<Login />} path='/' />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
