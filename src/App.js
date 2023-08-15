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
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { authenticateFingerprint } from "./services/authServices";


function App() {

  const [isInviteeActive, setIsInviteeActive] = useState(false);
  const [inviteeFPData, setInviteeFPData] = useState(null);
  const [isNotify, setIsNotify] = useState(false);
  const socket = io(process.env.SOCKET_URL);
  
  useEffect(() => {
    socket.on("fingerprintData", handleFingerprintData);
  }, [])

  const handleFingerprintData = async (fingerprintData) => {
    console.log("fingerprint-data: ", fingerprintData);
    if (!fingerprintData.success) {
      toast.error("Try again with fingerprint!");
    } else {
      if (isInviteeActive) {
        setInviteeFPData(fingerprintData.data);
      } else {
        const response = await authenticateFingerprint(fingerprintData.data);
        console.log(response, 'fingerprint authentication');
        // if (response.)
      }
    }
    requestFingerprint();
  }

  const requestFingerprint = () => {
    socket.emit("fingerprint", 3);
  }

  return (
    <>
      <TopBar />
      <BrowserRouter>
        <StudentCard isOpen={isNotify} />
        <Routes>
          <Route element={<DeviceSetup />} path="/device-setup" />
          <Route element={<RouteAuthMiddleware role={"role"}><GuestRegistration inviteeData={inviteeFPData} setInviteeActive={setIsInviteeActive} /></RouteAuthMiddleware>} path="guest-registration" />
          <Route element={<RouteAuthMiddleware role={"role"}><AdminView /></RouteAuthMiddleware>} path="entry-management" />
          <Route element={<RouteAuthMiddleware role={'role'}><StaffRegistration /></RouteAuthMiddleware>} path='staff-registration' />
          <Route element={<RouteAuthMiddleware role={'role'}><StudentView /></RouteAuthMiddleware>} path='student-records' />
          <Route element={<GateRegistration />} path='/gate-registration' />
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
