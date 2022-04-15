/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef } from "react";
import "../styles/Navbar.scss";
import { Button, Link, Title } from "./emotion";

const Navbar = () => {
  const navRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (window.scrollY > 100) {
        navRef.current.style.backgroundColor = "#0984E3";
      } else {
        navRef.current.style.backgroundColor = "transparent";
      }
    });
  }, []);

  return (
    <nav ref={navRef}>
      {/* Left */}
      <div className="left">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Testimonials</Link>
        <Link>Contact</Link>
      </div>

      {/* Middle */}
      <div className="middle">
        <Title color="white">Smart Home</Title>
      </div>

      {/* Right */}
      <div className="right">
        <Link>Download</Link>
        <Link>Login</Link>
        <Button>Sing Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
