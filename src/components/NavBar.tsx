import React from "react";
import logo from "../images/react-icon-small.png";
const NavBar = (): JSX.Element => {
    return (
        <nav>
            <img src={logo} alt="nav logo" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    );
};
export default NavBar;