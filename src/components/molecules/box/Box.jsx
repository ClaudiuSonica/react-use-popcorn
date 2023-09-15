/* eslint-disable react/prop-types */
import "./Box.scss";
import ButtonToggle from "../../atoms/buttonToggle/ButtonToggle";
import { useState } from "react";


const Box = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(open => !open);
  }

  return (
    <div className="box">
      <ButtonToggle isOpen={isOpen} toggleOpen={toggleOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
