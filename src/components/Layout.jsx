import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";

import logo from "../assets/images/camera-7328238_1280.png";

const Layout = ({ children }) => {
  const [listOpen, setListOpen] = useState(false);
  const [drawerMobileOpen, setDrawerMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    setDrawerMobileOpen(false);
  }, [pathname]);

  const handleListClick = () => {
    setListOpen((prevListOpen) => !prevListOpen);
  };

  const handleMenuClick = () => {
    setDrawerMobileOpen((prevDrawerMobileOpen) => !prevDrawerMobileOpen);
  };

  const drawerItems = (
    <Box>
      <Box
        component="img"
        src={logo}
        alt="Logo"
        onClick={() => navigate("/")}
        width={239}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
      <Divider />
      <List disablePadding>
        <ListItemButton onClick={handleListClick} sx={{ px: 3 }}>
          <ListItemText primary="Galleries" />
          {listOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={listOpen} unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/gallery/people")}
            >
              <ListItemText primary="People" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/gallery/nature")}
            >
              <ListItemText primary="Nature" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 6 }}
              onClick={() => navigate("/gallery/city")}
            >
              <ListItemText primary="City" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton sx={{ px: 3 }}>
          <ListItemText primary="About" onClick={() => navigate("/about")} />
        </ListItemButton>
        <ListItemButton sx={{ px: 3 }}>
          <ListItemText
            primary="Pricing"
            onClick={() => navigate("/pricing")}
          />
        </ListItemButton>
        <ListItemButton sx={{ px: 3 }}>
          <ListItemText
            primary="Contact"
            onClick={() => navigate("/contact")}
          />
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <Box display="flex">
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#8d5185",
          display: { xs: "block", md: "none" },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={handleMenuClick}>
            <Menu />
          </IconButton>
          <Typography variant="h6" pl={1}>
            Jane Doe Photography
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", md: "block" },
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        {drawerItems}
      </Drawer>

      <Drawer
        variant="temporary"
        anchor="left"
        sx={{
          display: { xs: "block", md: "none" },
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        open={drawerMobileOpen}
        onClose={handleMenuClick}
      >
        {drawerItems}
      </Drawer>
      <Box
        component="main"
        flexGrow={1}
        mt={{ xs: "2rem", md: 0 }}
        pt={3}
        px={{ lg: "5rem", md: "2rem", sm: "1rem", xs: 1 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
