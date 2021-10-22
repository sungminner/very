import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "img/logo.png";
import "css/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="logo" />
      </Link>
      <div className="nav-link">
        <Link to="/">
          <div className="nav-link__item">
            <p>Home</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <div className="nav-link__item">
          <p>About Us</p>
          <FontAwesomeIcon icon="caret-down" />
        </div>
        <Link to="/alumni">
          <div className="nav-link__item">
            <p>Alumni Members</p>
            <FontAwesomeIcon icon="caret-down" />
          </div>
        </Link>
        <FontAwesomeIcon icon="bars" className="nav-menu" />
      </div>
    </div>
  );
};

export default Navigation;
