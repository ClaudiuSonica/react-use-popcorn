/* eslint-disable react/prop-types */
import "./MovieList.scss";
import Movie from "../../atoms/movie/Movie";

const MovieList = ({movies}) => {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default MovieList;