import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import CenteredGrid from "./components/JustGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CenteredGrid />
    </div>
  );
}

export default App;
