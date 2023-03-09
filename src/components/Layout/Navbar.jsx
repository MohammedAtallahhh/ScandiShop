import React from "react";

import "./Navbar.css";
const Navbar = ({ logo, children }) => {
  return (
    <nav id="main__nav">
      <div className="container">
        <h2 className="nav__logo">{logo}</h2>
        <div className="nav--actions">{children}</div>
      </div>
    </nav>
  );
};

export default Navbar;
