/* eslint-disable react/prop-types */
import "./MovieList.scss";
import Movie from "../../atoms/movie/Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
