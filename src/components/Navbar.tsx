/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalContext } from "../store/ModalContext";
import "../styles/Navbar.scss";
import { Button, Link, Title } from "./emotion";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);
  const modal = useContext(ModalContext);
  const { setLoginModal, setSignupModal, user } = modal;
  const [menuMobile, setMenuMobile] = useState<boolean>(false);

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

  const handleOpenMenu = () => {
    setMenuMobile(!menuMobile);
    menuMobileRef.current?.classList.toggle("show-menu");
  };

  const handleClikMenu = () => {
    menuMobileRef.current?.classList.remove("show-menu");
    setMenuMobile(false);
  };

  return (
    <>
      {/* Nav Desktop */}
      <nav className="nav-desktop" ref={navRef}>
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
            <p className="display-name">{user.email}</p>
          </div>
        ) : (
          <div className="right">
            <Link href="#download">Download</Link>
            <Link onClick={handleLoginModal}>Login</Link>
            <Button onClick={handleSignupModal}>Sing Up</Button>
          </div>
        )}
      </nav>

      {/* Nav Mobile */}
      <nav className="nav-mobile">
        {menuMobile ? (
          <IoIosClose onClick={handleOpenMenu} className="ham-icon" />
        ) : (
          <IoIosMenu onClick={handleOpenMenu} className="ham-icon" />
        )}
        <h3 className="brand">Smart Home</h3>

        {user ? (
          <p className="display-name">{user.email}</p>
        ) : (
          <p onClick={handleLoginModal} className="auth-info">
            login
          </p>
        )}
      </nav>

      {/* Nav Mobile Menu Open */}
      <div ref={menuMobileRef} className="menu-mobile">
        <a onClick={handleClikMenu} href="#hero">
          Home
        </a>
        <a onClick={handleClikMenu} href="#about">
          About
        </a>
        <a onClick={handleClikMenu} href="#testimonials">
          Testimonials
        </a>
        <a onClick={handleClikMenu} href="#download">
          Download
        </a>
        <a onClick={handleClikMenu} href="#contact">
          Contact
        </a>
      </div>
    </>
  );
};

export default Navbar;
