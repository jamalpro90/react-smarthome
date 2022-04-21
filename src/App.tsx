import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Client from "./components/Client";
import Faq from "./components/Faq";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import { ModalContextProvier, ModalContext } from "./store/ModalContext";

function App() {
  return (
    <ModalContextProvier>
      <div style={{ position: "relative" }}>
        {/* Login Modal & Sign Up Modal */}
        <LoginModal />
        <SignupModal />

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

        <About />
        <Testimonials />
        <Client />
        <Faq />
        <Download />
        <Contact />

        {/* Wave Image */}
        <img src="/img/wave.png" alt="wave" className="wave" />

        <Footer />
      </div>
    </ModalContextProvier>
  );
}

export default App;
