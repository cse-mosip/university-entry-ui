import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../services/authServices";

export default function SideNavBar(props) {
  const role = props.role;
  const location = window.location;
  const currentPath = location.pathname;
  console.log("Current path is,,,,,,,,,,", currentPath);

  const adminItems = [
    {
      text: "Home",
      icon: <HomeIcon />,
      route: "/home",
    },
    {
      text: "Entry Records",
      icon: <PersonIcon />,
      route: "/entry-management",
    },
    {
      text: "Gate Registration",
      icon: <PersonIcon />,
      route: "/gate-registration",
    }
  ];

  const studentsItems = [
    { text: "Home", icon: <HomeIcon />, route: "/home" },
    {
      text: "University Entrance History",
      icon: <PersonIcon />,
      route: "/student-records",
    },
  ];

  const securityItems = [
    { text: "Home", icon: <HomeIcon />, route: "/home" },
    {
      text: "Guest Registration",
      icon: <PersonIcon />,
      route: "/guest-registration",
    },
    // {
    //   text: "Staff Registration",
    //   icon: <PersonIcon />,
    //   route: "/guest-registration",
    // },
  ];

  return (
    <Box
      sx={{ width: "250px", background: "white", height: "100%" }}
      role="presentation"
    >
      <List>
        {role === "ADMIN" &&
          adminItems.map((adminItem, index) => (
            <ListItem key={adminItem.text} disablePadding>
              <ListItemButton
                component={Link}
                to={adminItem.route}
                selected={location.pathname === adminItem.route}
                sx={{
                  backgroundColor:
                    location.pathname === adminItem.route
                      ? "blue"
                      : "transparent",
                }}
              >
                <ListItemIcon>{adminItem.icon}</ListItemIcon>
                <ListItemText primary={adminItem.text} />
              </ListItemButton>
            </ListItem>
          ))}

        {role === "STUDENT" &&
          studentsItems.map((studentItem, index) => (
            <ListItem key={studentItem.text} disablePadding>
              <ListItemButton
                component={Link}
                to={studentItem.route}
                selected={location.pathname === studentItem.route}
                sx={{
                  backgroundColor:
                    location.pathname === studentItem.route
                      ? "blue"
                      : "transparent",
                }}
              >
                <ListItemIcon>{studentItem.icon}</ListItemIcon>
                <ListItemText primary={studentItem.text} />
              </ListItemButton>
            </ListItem>
          ))}

        {role === "SECURITY" &&
          securityItems.map((securityItem, index) => (
            <ListItem key={securityItem.text} disablePadding>
              <ListItemButton
                component={Link}
                to={securityItem.route}
                selected={location.pathname === securityItem.route}
                sx={{
                  backgroundColor:
                    location.pathname === securityItem.route
                      ? "blue"
                      : "transparent",
                }}
              >
                <ListItemIcon>{securityItem.icon}</ListItemIcon>
                <ListItemText primary={securityItem.text} />
              </ListItemButton>
            </ListItem>
          ))}

        <ListItem key="Logout" disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            onClick={() => {
              logout();
            }}
            sx={{
              backgroundColor: currentPath === "/" ? "blue" : "transparent",
            }}
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
}
