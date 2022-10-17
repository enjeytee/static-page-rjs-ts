import React from "react";
import logo from "../images/react-icon-small.png";
const NavBar = () => {
    return (React.createElement("nav", null,
        React.createElement("img", { src: logo, alt: "nav logo", className: "nav--icon" }),
        React.createElement("h3", { className: "nav--logo_text" }, "ReactFacts"),
        React.createElement("h4", { className: "nav--title" }, "React Course - Project 1")));
};
export default NavBar;
