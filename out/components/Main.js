import React from "react";
const Main = () => {
    return (React.createElement("main", null,
        React.createElement("h1", { className: "main--title" }, "Fun facts about React"),
        React.createElement("ul", { className: "main--facts" },
            React.createElement("li", null, "Was first released in 2013"),
            React.createElement("li", null, "Was originally created by Jordan Wilke"),
            React.createElement("li", null, "Has well over 100K stars on Github"),
            React.createElement("li", null, "Is maintained by Facebook"),
            React.createElement("li", null, "Powers thousands of enterprise apps, including mobile apps"))));
};
export default Main;
