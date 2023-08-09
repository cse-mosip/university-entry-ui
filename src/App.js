import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteAuthMiddleware from "./middlewares/RouteAuthMiddleware";
import GuestRegistration from "./pages/GuestRegistration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StudentCard from "./pages/studentDetails";
import AdminView from "./pages/AdminView";
import DeviceSetup from "./pages/DeviceSetup";
import TopBar from "./components/topBar";
import { ToastContainer, toast } from "react-toastify";
import StaffRegistration from './pages/StaffRegistration';

function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route element={<DeviceSetup />} path="/device-setup" />
          <Route
            element={
              <RouteAuthMiddleware role={"role"}>
                <GuestRegistration />
              </RouteAuthMiddleware>
            }
            path="guest-registration"
          />
          <Route
            element={
              <RouteAuthMiddleware role={"role"}>
                <AdminView />
              </RouteAuthMiddleware>
            }
            path="entry-management"
          />
          <Route element={<StudentCard isOpen={true} />} path="/stu" />
          <Route element={<Home />} path="/home" />
          <Route element={<RouteAuthMiddleware role={'role'}><StaffRegistration /></RouteAuthMiddleware>} path='staff-registration' />
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
// =======
// import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import RouteAuthMiddleware from './middlewares/RouteAuthMiddleware';
// import GuestRegistration from './pages/GuestRegistration';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import StudentCard from './pages/studentDetails';
// import AdminView from './pages/AdminView';
// import DeviceSetup from './pages/DeviceSetup';
// import TopBar from './components/topBar';
// import StudentView from './pages/StudentView';
// import SideNavBar from './components/SideNavBar/SideNavBar';
// import GateRegistration from './pages/GateRegistration';

// function App() {
// 	return (
// 		<>
// 			<TopBar />

// 			<BrowserRouter>
// 				<Routes>

// 					<Route element={<DeviceSetup />} path='/device-setup' />
// 					<Route element={<RouteAuthMiddleware role={'role'}><GuestRegistration /></RouteAuthMiddleware>} path='guest-registration' />
// 					<Route element={<RouteAuthMiddleware role={'role'}><AdminView /></RouteAuthMiddleware>} path='entry-management' />
// 					<Route element={<RouteAuthMiddleware role={'role'}><StudentView/></RouteAuthMiddleware>} path='student-records' />
// 					<Route element={<StudentCard isOpen={true} />} path='/stu' />
// 					<Route element={<Home role={'role'}/>} path='/home' />
// 					<Route element={<Login role={'role'}/>} path='/' />
// 					<Route element={<GateRegistration />} path='/gate-register' />
// 				</Routes>
// 			</BrowserRouter>
// 		</>
// 	);
// >>>>>>> develop
}

export default App;
