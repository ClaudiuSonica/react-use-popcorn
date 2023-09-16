/* eslint-disable react/prop-types */
import "./SearchInput.scss";

const SearchInput = ({query, setQuery}) => {
  return (
    <input
      name="search"
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
