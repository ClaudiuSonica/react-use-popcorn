// import key from "./apiKey";
import NavBar from "./components/molecules/navBar/NavBar";
import SearchInput from "./components/atoms/searchInput/SearchInput";
import NumResults from "./components/atoms/numResults/NumResults";


// const KEY = key;
const App = () => {
  return (
    <>
      <header>
        <NavBar>
          <SearchInput />
          <NumResults />
        </NavBar>
      </header>
    </>
  );
};

export default App;
