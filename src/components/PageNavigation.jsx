import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = (props) => {

  return (
    <div className="text-black font-semibold my-2">
      <NavLink to={"/"} className={"text-green-600 font-semibold hover:underline"}>Home</NavLink>/{`${props.title}`}
    </div>
  );
};

export default PageNavigation;
