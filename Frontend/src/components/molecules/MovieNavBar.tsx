import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  const navigateToProducts = () => {
    navigate("/movies");
  };
  const navigateToAboutUs = () => {
    navigate("/aboutus");
  };

  const cardStyle = {
    backgroundColor: "#d1bc8a",
  };

  return (
    <AppBar position="static" style={cardStyle}>
      <Toolbar>
        <Typography variant="h6">FilmCity</Typography>
        <Button color="inherit" onClick={navigateToProducts}>
          Products
        </Button>
        <Button color="inherit" onClick={navigateToAboutUs}>
          About us
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
