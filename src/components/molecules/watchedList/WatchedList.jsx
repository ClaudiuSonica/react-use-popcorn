/* eslint-disable react/prop-types */
import "./WatchedList.scss";
import WatchedMovie from "../../atoms/watchedMovie/WatchedMovie";

const WatchedList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  )
}

export default WatchedList;