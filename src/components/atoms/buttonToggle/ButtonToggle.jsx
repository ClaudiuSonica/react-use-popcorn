import { useState } from "react";
import "./ButtonToggle.scss";

const ButtonToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen((open) => !open)}
      className="button-toggle">
      {isOpen ? "-" : "+"}
    </button>
  );
};


export default ButtonToggle;