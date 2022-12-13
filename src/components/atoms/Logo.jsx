import React from "react";

import logo from "./media/logo.png";

// src="https://github.com/lyazmat.png"

export default function Logo(props) {
  return (
    <img src={logo} alt="Logo" width={props.width} height={props.height} />
  );
}
