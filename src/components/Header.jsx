import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center px-6 relative">
      <NavLink to={"/"}>
        <img src={logo} alt="" className="w-[200px] h-[70px] px-6 py-0" />
      </NavLink>
      <Nav /> 
    </header>
  );
};

export default Header;
