import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Beach Resort" />
          </Link>
          <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>

        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          {/* should be set as a parameter of an array  */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
