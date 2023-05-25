import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";

import logo from "../../assets/images/camera-7328238_1280.png";

const DrawerItems = () => {
  const [listOpen, setListOpen] = useState(false);
  const navigate = useNavigate();

  const handleListClick = () => {
    setListOpen((prevListOpen) => !prevListOpen);
  };

  return (
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
};

export default DrawerItems;
