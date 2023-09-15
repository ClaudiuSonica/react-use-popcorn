/* eslint-disable react/prop-types */
import "./NavBar.scss";
import Logo from "../../atoms/logo/Logo";

const NavBar = ({children}) => {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
};

export default NavBar;
