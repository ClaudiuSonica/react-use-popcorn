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
import ErrorMessage from "./components/atoms/errorMessage/ErrorMessage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const query = "matrix";

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=${KEY}`
        );

        if (!response.ok)
          throw new Error("Something went wrong with fetching the movies");

        const data = await response.json();

        if (data.Response === "False") throw new Error("Movie not found"); 

        setMovies(data.Search);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error} />}
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
