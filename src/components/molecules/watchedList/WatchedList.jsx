/* eslint-disable react/prop-types */
import "./WatchedList.scss";
import WatchedMovie from "../../atoms/watchedMovie/WatchedMovie";

const WatchedList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
