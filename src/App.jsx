// import key from "./apiKey";
import NavBar from "./components/molecules/navBar/NavBar";
import SearchInput from "./components/atoms/searchInput/SearchInput";
import NumResults from "./components/atoms/numResults/NumResults";
import Main from "./components/organisms/main/Main";


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
      <Main />
    </>
  );
};

export default App;
