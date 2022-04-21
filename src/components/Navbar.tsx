/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../store/ModalContext";
import "../styles/Navbar.scss";
import { Button, Link, Title } from "./emotion";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const modal = useContext(ModalContext);
  const { setLoginModal, setSignupModal, user, setUser } = modal;

  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (navRef.current === null) return;
      if (window.scrollY > 100) {
        navRef.current.style.backgroundColor = "#0984E3";
      } else {
        navRef.current.style.backgroundColor = "transparent";
      }
    });
  }, []);

  const handleLoginModal = () => {
    setLoginModal(true);
    setSignupModal(false);
  };

  const handleSignupModal = () => {
    setLoginModal(false);
    setSignupModal(true);
  };

  return (
    <nav ref={navRef}>
      {/* Left */}
      <div className="left">
        <Link href="#hero">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#testimonials">Testimonials</Link>
        <Link href="#contact">Contact</Link>
      </div>

      {/* Middle */}
      <div className="middle">
        <Title color="white">Smart Home</Title>
      </div>

      {/* Right */}
      {user ? (
        <div className="right">
          <Link href="#download">Download</Link>
          <p>{user.email}</p>
        </div>
      ) : (
        <div className="right">
          <Link href="#download">Download</Link>
          <Link onClick={handleLoginModal}>Login</Link>
          <Button onClick={handleSignupModal}>Sing Up</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
