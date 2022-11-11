import React from "react";
import "./Navbar.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav1">
          <h1>Logo.</h1>
          <a href="">About</a>
          <a href="">Membership</a>
          <a href="">Marriage</a>
        </div>
        <div className="nav2">
          <Link to="">SignIn</Link>
          <a href="">Package</a>
          <a href="">My Profile</a>
          <button>O</button>
        </div>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default Navbar;
