import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
const App = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement(NavBar, null),
        React.createElement(Main, null)));
};
export default App;
