import { Button, Card, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import "./update.css";
import { Formik, useFormik } from "formik";
import { updateMovie } from "../../MovieService";
import MovieNavBar from "../molecules/MovieNavBar";
export default function MovieUpdate() {
  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    height: "25vw",
    width: "25vw",
    backgroundColor: "#f8f4eb",
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: "",
      movieName: "",
      movieGenre: "",
      moviePrice: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.movieName, values.movieGenre, values.moviePrice);
      console.log("hier", values);
    },
  });
  const handleSubmit = (
    movieName: string,
    movieGenre: string,
    moviePrice: string
  ) => {
    if (id == undefined) {
      return;
    }
    updateMovie({
      movieId: id,
      movieName: movieName,
      movieGenre: movieGenre,
      moviePrice: moviePrice,
    })
      .then((response: any) => {
        console.log("response", response);
        navigate("/movies/");
      })
      .catch((e: any) => {
        postMessage(e.response.data);
      });
  };
  return (
    <div>
      <MovieNavBar></MovieNavBar>
      <div id="update">
        <Card style={cardStyle}>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="id">id</label>
              <input
                id="id"
                name="id"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.id}
              />
            </div>
            <div>
              <h1>New Movie</h1>
              <label htmlFor="movieName">Name</label>
              <input
                id="movieName"
                name="movieName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.movieName}
              />
            </div>
            <div>
              <label htmlFor="movieGenre">Genre</label>
              <input
                id="movieGenre"
                name="movieGenre"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.movieGenre}
              />
            </div>
            <div>
              <label htmlFor="moviePrice">Price</label>
              <input
                id="moviePrice"
                name="moviePrice"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.moviePrice}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </Card>
      </div>
    </div>
  );
}
