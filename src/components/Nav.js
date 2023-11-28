import React from "react";
import logo from "../images/Frame.png";
import "./nav.css";
const Nav = () => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="logo" />
      <div className="nav">
        <a href="#cs">Career</a>
        <a href="#cs">Blogs</a>
        <a href="#cs">Leaderboard</a>
        <a href="#cs">Fees</a>
        <button>Trade Now</button>
      </div>
    </div>
  );
};

export default Nav;
