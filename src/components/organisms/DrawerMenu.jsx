import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";

import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  const drawerWidth = 240;

  return (
    <Drawer
      variant="temporary"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiBackdrop-root`]: {
          backgroundColor: "rgba(255, 255, 255, 0.0)",
        },
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      open={props.open}
      onClose={props.toggleDrawer()}
    >
      <Toolbar
        sx={{
          marginTop: "10px",
        }}
      />
      <Box
        sx={{ overflow: "auto" }}
        onClick={props.toggleDrawer()}
        onKeyDown={props.toggleDrawer()}
      >
        <List>
          <ListItem disablePadding as={Link} to="/sale">
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Vendas"} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding as={Link} to="/sale">
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Comissões"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
