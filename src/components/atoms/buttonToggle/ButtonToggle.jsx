/* eslint-disable react/prop-types */
import "./ButtonToggle.scss";

const ButtonToggle = ({isOpen, toggleOpen}) => {

  return (
    <button
      onClick={toggleOpen}
      className="button-toggle">
      {isOpen ? "-" : "+"}
    </button>
  );
};


export default ButtonToggle;