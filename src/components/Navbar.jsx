import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Frame 1.png";
import profile from "../assets/Ellipse 2.png";

const Navbar = () => {
  return (
    <div className="navv">
      <img src={logo} alt="" />

      <div>
        <Link to="/ongoing">Ongoing</Link>
        <Link to="/complete">Completed</Link>
        <Link to="/allgoals">All Goals</Link>
      </div>

      <img src={profile} alt="" />
    </div>
  );
};

export default Navbar;
