/* eslint-disable react/prop-types */
import "./NumResults.scss";

const NumResults = ({movies}) => {
  return (
    <p className="num__results">
      Found <strong>{ movies.length }</strong> results
    </p>
  );
};

export default NumResults;
