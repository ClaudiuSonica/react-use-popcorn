/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./WatchedBox.scss";
import ButtonToggle from "../../atoms/buttonToggle/ButtonToggle";
import { tempWatchedData } from "../../../data";
import { useState } from "react";
import WatchedSummary from "../watchedSummary/WatchedSummary";
import WatchedList from "../watchedList/WatchedList";

const WatchedBox = ({ isOpen, onClick }) => {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <div className="box">
      <ButtonToggle isOpen={isOpen} onClick={onClick} />
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
