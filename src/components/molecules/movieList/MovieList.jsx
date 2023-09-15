/* eslint-disable no-unused-vars */
import "./MovieList.scss";
import { tempMovieData } from "../../../data";
import Movie from "../../atoms/movie/Movie";
import { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default MovieList;