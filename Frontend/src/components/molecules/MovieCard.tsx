import { Button, Card } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovie } from "../../MovieService";
import "./card.css";

import BuyButton from "../atoms/BuyButton";
import { movieData } from "../../application";


export default function MovieCard1() {
  const navigate = useNavigate();

  const imageStyle = {
    height: "15vw",
    width: "12vw",
  };
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "30vw",
    width: "30vw",
    backgroundColor: "#f8f4eb",
  };

  return (
    <div>
      {movieData.map((movie, key) => {
        return (
          <div id="card2" key={key}>
            <Card style={cardStyle}>
              <img
                src={movie.movieImage}
                alt="Image"
                style={imageStyle}
              />
              <p>Name: {movie.movieName}</p>
              <p>Price: {movie.moviePrice}</p>
              <BuyButton></BuyButton>
              <Button
                onClick={() => {
                  navigate("/movies/" + movie.movieid);
                }}
              >
                More Details
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
