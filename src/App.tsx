import React from "react";
import logo from "./images/react-logo.png";

const App = (): JSX.Element => {
    return (
        <div>
            <img src={logo} width="40px" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was firt released in 2013</li>
                <li>Was originally created by Jordan Wilke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
};
export default App;