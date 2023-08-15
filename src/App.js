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
import { ToastContainer } from "react-toastify";
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

  // console.log('socket url', process.env.SOCKET_URL);
  // const socket = io(process.env.SOCKET_URL);

  const location = window.location.pathname;
  const socket = io("http://localhost:7291");

  useEffect(() => {
    socket.on("connect", handleWSconnection);
    socket.on("fingerprintData", handleFingerprintData);
  }, []);

  const handleWSconnection = () => {
    requestFingerprint();
    console.log('connection is succeeded')
  }

  const handleFingerprintData = async (fingerprintData) => {
    if (!fingerprintData) {
      console.log("fingerprint not successfull");
    } else {
      if (isInviteeActive) {
        setInviteeFPData(fingerprintData.data);
      } else {
        console.log("fingerprint-data: -----------------------------", fingerprintData);
        const data = {
          "entryPlaceId": localStorage.getItem('gate_id'),
          "bioSign": fingerprintData.data
        }
        try {
          const response = await authenticateFingerprint(fingerprintData.data);
          setIsNotify(true);
          console.log(response, 'fingerprint authentication');
        } catch (e) {
          console.log(e);
        }
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
