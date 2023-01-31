import axios, { AxiosInstance } from "axios";
import { isArrowFunction } from "typescript";

import { defaultAxiosInstance } from "./Api";

type Movie = {
  movieId: string;
  movieName: string;
  movieGenre: string;
  moviePrice: string;
};

export async function getMovie() {
  console.log(defaultAxiosInstance.get("movies/"), "ksjhdsdgfs");
  const data = await defaultAxiosInstance
    .get("movies/", {
      auth: {
        username: "lekhana",
        password: "21",
      },
    }) 
    .catch((error) => {
      throw error;
    });
  console.log("after fetch");
  console.log(data);
  return data["data"];
}

export async function getMovieById(id: string) {
  const data = await defaultAxiosInstance.get("/movies/" + id, {
    auth: {
      username: "lekhana",
      password: "21",
    },
  });
  console.log("after fetch");
  return data["data"];
}

export async function addMovie(params: Movie) {
  const res = await defaultAxiosInstance.post(
    "/movies",
    {
      movieName: params.movieName,
      moviePrice: params.moviePrice,
    },
    {
      auth: {
        username: "lekhana",
        password: "21",
      },
    }
  );
  if (res && res.status === 200) {
    console.log("movie successfully created");
  }
}
export async function updateMovie(params: Movie) {
  const res = await defaultAxiosInstance.put(
    "/movies/" + params.movieId,
    {
      movieName: params.movieName,
      movieGenre: params.movieGenre,
      moviePrice: params.moviePrice,
    },
    {
      auth: {
        username: "lekhana",
        password: "21",
      },
    }
  );
  if (res && res.status === 200) {
    console.log("movie successfully created");
  }
}
export async function deleteMovieById(id: string) {
  const res = await defaultAxiosInstance
    .delete("/movies/" + id, {
      auth: {
        username: "lekhana",
        password: "21",
      },
    })
    .catch((error) => {
      throw error;
    });
  return res.data;
}
