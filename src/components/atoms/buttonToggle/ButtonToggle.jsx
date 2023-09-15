/* eslint-disable react/prop-types */
import "./ButtonToggle.scss";

const ButtonToggle = ({isOpen, onClick}) => {

  return (
    <button
      onClick={onClick}
      className="button-toggle">
      {isOpen ? "-" : "+"}
    </button>
  );
};


export default ButtonToggle;