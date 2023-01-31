import { Button, Card } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteMovieById, getMovieById } from "../../MovieService";
import BuyButton from "../atoms/BuyButton";

import DetailButton from "../atoms/DetailButton";

import MovieNavBar from "../molecules/MovieNavBar";
import "./detail.css";
function DetailCard1() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  type Movie = {
    movieId: string;
    movieName: string;
    movieGenre: string;
    moviePrice: string;
  };
  const imageStyle = {
    height: "18vw",
    width: "18vw",
  };

  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "32vw",
    width: "25vw",
    backgroundColor: "#f8f4eb",
  };

  const navigate = useNavigate();
  const handleDelete = () => {
    deleteMovieById(id!).then(() => {
      navigate("/movies/");
    });
  };

  useEffect(() => {
    if (id == undefined) {
      return;
    }
    getMovieById(id)
      .then((response) => setMovie(response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <MovieNavBar></MovieNavBar>
      <div id="detail">
        <Card style={cardStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1ptemhH88HIHHHHKV_gEsfUtRjWsrVzO0w&usqp=CAU"
            alt=""
            style={imageStyle}
          />
          <p>Id: {id}</p>
          <p>Name: {movie?.movieName}</p>
          <p>Genre: {movie?.movieGenre}</p>
          <p>Price: {movie?.moviePrice} </p>

          <BuyButton></BuyButton>

          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </Card>
      </div>
    </div>
  );
}
export default DetailCard1;
