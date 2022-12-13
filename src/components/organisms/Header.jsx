import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../atoms/Logo";

export default function Header(props) {
  return (
    <AppBar
      direction="column"
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#F8F8F8",
        color: "#00585E",
        height: "70px",
        justifyContent: "center",
      }}
    >
      <Toolbar>
        <MenuIcon
          edge="start"
          color="#F8F8F8"
          fontSize="large"
          sx={{
            marginX: "25px",
          }}
          onClick={props.toggleDrawer()}
        />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Logo />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            textAlign: "center",
            width: "100vw",
            zIndex: -1,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            {props.title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.defaultProps = {
  title: "",
};
