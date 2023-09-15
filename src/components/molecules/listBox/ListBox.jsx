/* eslint-disable react/prop-types */
import "./ListBox.scss";
import ButtonToggle from "../../atoms/buttonToggle/ButtonToggle";
import MovieList from "../movieList/MovieList";

const ListBox = ({isOpen, onClick}) => {
  return (
    <div className="box">
      <ButtonToggle isOpen={isOpen} onClick={onClick} />
      {isOpen && <MovieList />}
    </div>
  );
};

export default ListBox;
