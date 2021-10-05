import React from "react";
import s from "./NavbarItem.module.css";

const NavBarItem = (props) => {
  return (
    <div className={s.item}>
          <a href="/"> {props.name}</a>
    </div>
  );
};
export default NavBarItem;
