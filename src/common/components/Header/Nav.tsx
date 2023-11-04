import React from "react";
// import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="mainmenu-nav">
      <ul className="mainmenu">
        <li className="menu-item-has-children">
          <a>
            Digital Agency <FaAngleDown />{" "}
          </a>
          <ul className="axil-submenu">
            <li>
              <a>Digital Agency</a>
            </li>
            <li>
              <a>Creative Agency</a>
            </li>
            <li>
              <a>Personal Portfolio</a>
            </li>
            <li>
              <a>Home Startup</a>
            </li>
            <li>
              <a>Corporate Agency</a>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <a>
            Services <FaAngleDown />
          </a>
          <ul className="axil-submenu">
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Service Two</a>
            </li>
            <li>
              <a>Service Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
