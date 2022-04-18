import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Client from "./components/Client";
import Faq from "./components/Faq";
import Download from "./components/Download";
import Contact from "./components/Contact";

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

      {/* Client */}
      <Client />

      {/* Faq */}
      <Faq />

      {/* Download */}
      <Download />

      {/* Contact */}
      <Contact />

      {/* Wave Image */}
      <img src="/img/wave.png" alt="wave" className="wave" />

      {[...Array(20)].map((a, i) => (
        <br />
      ))}
    </div>
  );
}

export default App;
