import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./Header.scss";

// Import images and assets
import logo from "../../../assets/images/logo.png";

const Header = props => {
  return (
    <div className="Header">
      <ul>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Gallery</Link>
        </li>
        <li>
          <img src={logo}></img>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
