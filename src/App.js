import React from "react";
import "./App.css";
import Students from "./Components/Students/Students";
import Wellcom from "./Components/Wellcom/Wellcom";
// import Logo from "../public/Logo.png"
// import {} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Wellcom />
        {/* <Nav />  */}
        <Students />
      </div>
    );
  }
}

export default App;
