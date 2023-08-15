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
import StudentView from './pages/StudentView';
import GateRegistration from './pages/GateRegistration';


function App() {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route element={<RouteAuthMiddleware role={"SECURITY"}><DeviceSetup /></RouteAuthMiddleware>} path="/device-setup" />
          <Route element={<RouteAuthMiddleware role={"SECURITY"}><GuestRegistration /></RouteAuthMiddleware>} path="guest-registration"/>
          <Route element={<RouteAuthMiddleware role={"ADMIN"}><AdminView /></RouteAuthMiddleware>} path="entry-management"/>
          {/* <Route element={<RouteAuthMiddleware role={"ADMIN"}><StaffRegistration /></RouteAuthMiddleware>} path='staff-registration' /> */}
		  <Route element={<RouteAuthMiddleware role={"STUDENT"}><StudentView/></RouteAuthMiddleware>} path='student-records' />
          <Route element={<RouteAuthMiddleware role={"ADMIN"}><GateRegistration /></RouteAuthMiddleware>} path='/gate-register' />
          {/* <Route element={<StudentCard isOpen={true} />} path="/stu" /> */}
          <Route element={<Home />} path="/home" />
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
