/* eslint-disable no-unused-vars */
import NavBar from "./components/molecules/navBar/NavBar";
import SearchInput from "./components/atoms/searchInput/SearchInput";
import NumResults from "./components/atoms/numResults/NumResults";
import Main from "./components/organisms/main/Main";
import { useEffect, useState } from "react";
import Box from "./components/molecules/box/Box";
import MovieList from "./components/molecules/movieList/MovieList";
import WatchedSummary from "./components/molecules/watchedSummary/WatchedSummary";
import WatchedList from "./components/molecules/watchedList/WatchedList";
import Loader from "./components/atoms/loader/Loader";
import ErrorMessage from "./components/atoms/errorMessage/ErrorMessage";
import SelectedMovie from "./components/molecules/selectedMovie/SelectedMovie";
import { useMovies } from "./useMovies";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useState(() => {
    const localWatched = localStorage.getItem("watched");
    return localWatched ? JSON.parse(localWatched) : [];
  });

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <>
      <header>
        <NavBar>
          <SearchInput query={query} setQuery={setQuery} />
          <NumResults movies={movies} />
        </NavBar>
      </header>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;
