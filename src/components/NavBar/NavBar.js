import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/parks"> Parks</NavLink>
      <NavLink to="/parks/new">Add Park</NavLink>
    </nav>
  );
}

export default NavBar;
