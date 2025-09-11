import "./index.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="/">
        Main
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="characters">
        Characters
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="episodes">
        Episodes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link")}
        to="locations">
        Locations
      </NavLink>
    </header>
  );
};

export default Header;
