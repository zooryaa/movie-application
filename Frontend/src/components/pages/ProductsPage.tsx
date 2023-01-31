import { Box, Grid } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import CarNavBar from "../molecules/MovieNavBar";
import MovieCard from "../molecules/MovieCard";

import "./products.css";
import MovieNavBar from "../molecules/MovieNavBar";

export default function Products() {
  return (
    <div style={{
    justifyContent: "center",
    alignItems: "center",}}>
      <MovieNavBar></MovieNavBar>
      <div id="products">
        <MovieCard></MovieCard>
      </div>
    </div>
  );
}
