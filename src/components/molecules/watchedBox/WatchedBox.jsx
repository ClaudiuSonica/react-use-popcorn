/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./WatchedBox.scss";
import ButtonToggle from "../../atoms/buttonToggle/ButtonToggle";

const WatchedBox = ({children}) => {
  return (
    <div className="box">
      <ButtonToggle />
      {children}
    </div>
  );
};

export default WatchedBox;
