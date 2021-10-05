import React from "react";
import s from "./Header.module.css";


const Header = () => {
  return (
    <div className={s.header}>
      <a href="/">
        <img  className={s.header__logo} src="/images/logo.svg" alt="logo"></img>
      </a>
    </div>
  );
};
export default Header;
