import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import logo from "../assets/images/camera-7328238_1280.png";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <Box display="flex">
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Box component="img" src={logo} alt="Logo" background="transparent" />
        <Divider />
        <List disablePadding>
          <ListItemButton onClick={handleClick} sx={{ px: 3 }}>
            <ListItemText primary="Galleries" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} unmountOnExit>
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
      </Drawer>
      <Box
        component="main"
        flexGrow={1}
        pt={3}
        px={{ md: "5rem", sm: "1rem", xs: 2 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
