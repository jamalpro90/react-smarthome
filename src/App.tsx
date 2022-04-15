import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      {/* Hero & Navbar */}
      <Hero />

      {/* Download App */}
      <div className="download-container">
        <img src="/img/app-store.png" alt="app store" className="app-store" />
        <img
          src="/img/play-store.png"
          alt="play store"
          className="play-store"
        />
      </div>

      {/* About */}
      <About />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}

export default App;
