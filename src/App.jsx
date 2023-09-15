/* eslint-disable no-unused-vars */
// import key from "./apiKey";
import NavBar from "./components/molecules/navBar/NavBar";
import SearchInput from "./components/atoms/searchInput/SearchInput";
import NumResults from "./components/atoms/numResults/NumResults";
import Main from "./components/organisms/main/Main";
import { tempMovieData } from "./data";
import { tempWatchedData } from "./data";
import { useState } from "react";
import Box from "./components/molecules/box/Box";
import MovieList from "./components/molecules/movieList/MovieList";
import WatchedSummary from "./components/molecules/watchedSummary/WatchedSummary";
import WatchedList from "./components/molecules/watchedList/WatchedList";


const App = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

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
          <MovieList movies={movies} />
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
