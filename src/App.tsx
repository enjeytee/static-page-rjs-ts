import React from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
const App = (): JSX.Element => {
    return (
        <div className="container">
            <NavBar />
            <Main />
        </div>
    )
};
export default App;