import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";

import MovieNavBar from "../molecules/MovieNavBar";

function Login() {
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "25vw",
    width: "25vw",
    backgroundColor: "#f8f4eb",
  };
  return (
    <div id="login">
      <MovieNavBar></MovieNavBar>
      <div style={{     height: "40vw",
      width: "100vw",
      backgroundImage: `url("https://batterseapowerstation.co.uk/content/uploads/2022/08/Cinema-in-the-Power-Station-image001hero-1600x869.jpg")` 
    }}>
        <h2>Home</h2>
    </div>
    </div>
  );
}

export default Login;
