import React from 'react';
// import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <p>Digital Agency <FaAngleDown /> </p>
                    <ul className="axil-submenu">
                        <li><p>Digital Agency</p></li>
                        <li><p>Creative Agency</p></li>
                        <li><p>Personal Portfolio</p></li>
                        <li><p>Home Startup</p></li>
                        <li><p>Corporate Agency</p></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <p>Services <FaAngleDown /></p>
                    <ul className="axil-submenu">
                        <li><p>Service</p></li>
                        <li><p>Service Two</p></li>
                        <li><p>Service Details</p></li>
                    </ul>
                </li>
                <li><p>Contact</p></li>
            </ul>
        </nav>
    )
}

export default Nav;