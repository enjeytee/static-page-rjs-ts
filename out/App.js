import React from "react";
import logo from "./images/react-logo.png";
const App = () => {
    return (React.createElement("div", null,
        React.createElement("img", { src: logo, width: "40px" }),
        React.createElement("h1", null, "Fun facts about React"),
        React.createElement("ul", null,
            React.createElement("li", null, "Was firt released in 2013"),
            React.createElement("li", null, "Was originally created by Jordan Wilke"),
            React.createElement("li", null, "Has well over 100K stars on Github"),
            React.createElement("li", null, "Is maintained by Facebook"),
            React.createElement("li", null, "Powers thousands of enterprise apps, including mobile apps"))));
};
export default App;
