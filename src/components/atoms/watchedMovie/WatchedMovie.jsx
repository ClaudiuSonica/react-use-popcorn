/* eslint-disable react/prop-types */
import "./WatchedMovie.scss";

const WatchedMovie = ({movie}) => {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{movie.Runtime} min</span>
        </p>
      </div>
    </li>
  )
}

export default WatchedMovie;