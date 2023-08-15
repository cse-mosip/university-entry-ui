import React, { useEffect, useState } from "react";
import StudentModal from "../components/studentModal";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Box from "@mui/material/Box";

const StudentCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  const handleModalClose = () => {
    console.log("calling close");
    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  };

  useEffect(() => {
    setModalOpen(props.isOpen);
    handleModalClose();
  }, [props.isOpen]);

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {/* <SideNavBar /> */}
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
          height: "60%",
          // margin: '0 0 0 250px'
        }}
      >
        <div>
          <StudentModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </Box>
    </div>
  );
};

export default StudentCard;
