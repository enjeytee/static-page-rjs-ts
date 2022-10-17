import React from "react";
import logo from "../images/react-logo.png";
const Header = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement("img", { src: logo, className: "container-logo", alt: "nav logo" }),
        React.createElement("h3", null, "ReactFacts"),
        React.createElement("h4", null, "React Course - Project 1")));
};
export default Header;
