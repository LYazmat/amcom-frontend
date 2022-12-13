import * as React from "react";
import { Container, Box, CssBaseline, Toolbar } from "@mui/material";
import Header from "../organisms/Header";
import DrawerMenu from "../organisms/DrawerMenu";

export default function Default(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header title={props.title} toggleDrawer={toggleDrawer}></Header>
      <DrawerMenu toggleDrawer={toggleDrawer} open={open}></DrawerMenu>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>{props.children}</Container>
      </Box>
    </Box>
  );
}
