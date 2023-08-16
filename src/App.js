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
  const [userData, setUserdata] = useState(null);

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
    if (fingerprintData.success === undefined) {
      if (isInviteeActive) {
        setInviteeFPData(fingerprintData);
      } else {
        const data = {
          "entry_place_id": localStorage.getItem('gate_id'),
          "bio_sign": { "data": fingerprintData}
        }
        console.log("fingerprint-data: -----------------------------", data);
        try {
          const response = await authenticateFingerprint(data);
          console.log(response, 'fingerprint authentication');
          if (response.success) {
            setIsNotify(true);
            setUserdata(response);
          } else {
            toast.error("Unaothorized");
          }
        } catch (e) {
          console.log(e);
          toast.error("Unaothorized");
        }
        // if (response.)
      }
    } else {
      // console.log("fingerprint not successfull");
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
        <StudentCard isOpen={isNotify} userData={userData} />
        <Routes>
          <Route element={<RouteAuthMiddleware role={"SECURITY"}><DeviceSetup /></RouteAuthMiddleware>} path="/gate-setup" />
          <Route element={<RouteAuthMiddleware role={"SECURITY"}><GuestRegistration inviteeData={inviteeFPData} setInviteeActive={setIsInviteeActive} /></RouteAuthMiddleware>} path="guest-registration" />
          <Route element={<RouteAuthMiddleware role={"ADMIN"}><AdminView /></RouteAuthMiddleware>} path="entry-management" />
          {/* <Route element={<RouteAuthMiddleware role={'ADMIN'}><StaffRegistration /></RouteAuthMiddleware>} path='staff-registration' /> */}
          <Route element={<RouteAuthMiddleware role={'STUDENT'}><StudentView /></RouteAuthMiddleware>} path='student-records' />
          <Route element={<RouteAuthMiddleware role={"ADMIN"}><GateRegistration /></RouteAuthMiddleware>} path='/gate-registration' />
          {/* <Route element={<StudentCard isOpen={true} />} path="/stu" /> */}
          <Route element={<Home/>} path="/home" />
          <Route element={<Login />} path="/" />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
