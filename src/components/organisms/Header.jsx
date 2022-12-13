import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(props) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={props.toggleDrawer()}
        >
          Clipped drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
