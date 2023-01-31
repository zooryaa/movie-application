import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import MovieNavBar from "../molecules/MovieNavBar";

function aboutus() {

  return (
    <div>
      <MovieNavBar></MovieNavBar>
        <Typography variant="h5" component="div">
          About us
        </Typography>
        <p>FilmCity is a movie shop that provides information about all the trending movies. As movie lovers we make sure you that you can buy your desired movie.Our goal is to give you the oppurtunity to watch movies everywhere, offline. We will make life easier for you.</p>
    </div>
  );
}

export default aboutus;
