import React from "react";
import NavBarItem from "./Item";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={s.navbar}>
      <ul>
        <li>
          <NavBarItem name="Profile" />
        </li>
        <li>
          <NavBarItem name="Message" />
        </li>
        <li>
          <NavBarItem name="News" />
        </li>
        <li>
          <NavBarItem name="Music" />
        </li>
        <li>
          <NavBarItem name="Settings" />
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
