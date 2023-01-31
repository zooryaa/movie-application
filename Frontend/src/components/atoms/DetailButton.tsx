import { Button } from "@mui/material";
import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function DetailButton() {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate("/detail");
  };

  {
    return (
      <Button variant="outlined" color="secondary" onClick={navigateToDetail}>
        Details
      </Button>
    );
  }
}
export default DetailButton;
