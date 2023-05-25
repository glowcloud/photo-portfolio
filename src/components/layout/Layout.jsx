import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Drawer,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import DrawerItems from "./DrawerItems";

const Layout = ({ children }) => {
  const [drawerMobileOpen, setDrawerMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setDrawerMobileOpen(false);
  }, [pathname]);

  const handleMenuClick = () => {
    setDrawerMobileOpen((prevDrawerMobileOpen) => !prevDrawerMobileOpen);
  };

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

      {/* DESKTOP DRAWER */}
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
        <DrawerItems />
      </Drawer>

      {/* MOBILE DRAWER */}
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
        <DrawerItems />
      </Drawer>

      {/* MAIN */}
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
