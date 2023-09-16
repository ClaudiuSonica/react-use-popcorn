/* eslint-disable no-unused-vars */
import KEY from "./apiKey";
import NavBar from "./components/molecules/navBar/NavBar";
import SearchInput from "./components/atoms/searchInput/SearchInput";
import NumResults from "./components/atoms/numResults/NumResults";
import Main from "./components/organisms/main/Main";
// import { tempMovieData } from "./data";
// import { tempWatchedData } from "./data";
import { useEffect, useState } from "react";
import Box from "./components/molecules/box/Box";
import MovieList from "./components/molecules/movieList/MovieList";
import WatchedSummary from "./components/molecules/watchedSummary/WatchedSummary";
import WatchedList from "./components/molecules/watchedList/WatchedList";
import Loader from "./components/atoms/loader/Loader";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = "matrix";

  useEffect(() => {
    setIsLoading(true);

    async function fetchMovies() {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`
      );
      const data = await response.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <header>
        <NavBar>
          <SearchInput />
          <NumResults movies={movies} />
        </NavBar>
      </header>

      <Main>
        <Box>
          {isLoading ? <Loader /> : <MovieList movies={movies} />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
};

export default App;
