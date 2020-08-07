import React from "react";
import "./hamburger.css";

const Hamburger = ({handleHamburgerMenu, active}) => {
  return (
    <button onClick = {handleHamburgerMenu} className={`hamburger hamburger--vortex ${active ? 'is-active' : ""}`} type="button" aria-label="Menu" aria-controls="navigation">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Hamburger;
