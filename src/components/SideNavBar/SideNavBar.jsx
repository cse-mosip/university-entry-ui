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

export default function SideNavBar() {
  const location = window.location;
  const currentPath = location.pathname;
  console.log("Current path is,,,,,,,,,,", currentPath);

  const notAllowedPaths = ["/", "/device-setup"];

  const adminItems = [
    {
      text: "Staff Registration",
      icon: <PersonIcon />,
      route: "/guest-registration",
    },
    {
      text: "Logout",
      icon: <LogoutIcon />,
      route: "/",
    },
  ];

  const studentsItems = [
    { text: "University Entrance History", icon: <HomeIcon />, route: "/home" },
    { text: "Logout", icon: <LogoutIcon />, route: "/" },
  ];

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/home" },
    {
      text: "Guest Registration",
      icon: <PersonIcon />,
      route: "/guest-registration",
    },
    {
      text: "Staff Registration",
      icon: <PersonIcon />,
      route: "/guest-registration",
    },
    { text: "Logout", icon: <LogoutIcon />, route: "/" },
  ];

  if (notAllowedPaths.includes(currentPath)) {
    return <></>;
  }
  return (
    <Box
      sx={{ width: "250px", background: "white", height: "100%" }}
      role="presentation"
    >
      <List>
        {menuItems.map((menuItem, index) => (
          <ListItem key={menuItem.text} disablePadding>
            <ListItemButton
              component={Link}
              to={menuItem.route}
              selected={location.pathname === menuItem.route}
              sx={{
                backgroundColor:
                  location.pathname === menuItem.route ? "blue" : "transparent",
              }}
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
