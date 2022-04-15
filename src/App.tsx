import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      {/* Hero */}
      <div className="hero-container">
        <div className="machine-learning" />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
