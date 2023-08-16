import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

function Home() {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userRole = authServices.getUserRole();
    setUserRole(userRole);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "60px",
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(/frontend-service/uni-entry/images/uom.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <SideNavBar role={userRole} />
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
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "800",
              color: "#012970",
              marginTop: "100px",
              fontFamily: "inherit",
            }}
          >
            University
            <br /> Entrance Identity <br />
            System
          </Typography>
          {/* <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#012970",
              // marginBottom: '230px',
              textTransform: "none",
              fontFamily: "inherit",
            }}
            onClick={() => navigate("/device-setup")}
          >
            Device Setup

          </Button> */}
        </Box>
      </div>
    </Box>
  );
}

export default Home;
