import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Text, Title } from "./emotion";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      {/* Machine Learing Image */}
      <div className="machine-learning" />
      {/* Circle */}
      <div className="circle" />

      <Navbar />

      {/* Hero Content */}
      <div className="hero-text">
        <Title className="title" margin="0" size="64px" color="white">
          Smart Home
        </Title>
        <Title className="title" margin="0" size="64px" color="white">
          Application
        </Title>
        <Text color="white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          enim eaque dolores laborum eos suscipit corporis consequatur rerum quo
          cupiditate accusamus numquam quaerat ipsa illum similique, atque, quas
          repudiandae qui.
        </Text>
      </div>

      {/* Hero Icons */}
      <div className="hero-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram className="icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedinIn className="icon" />
        </a>
      </div>

      {/* Hero Image Slices */}
      <div className="hero-phone-images">
        <img src="/img/hp.png" alt="smartphone" className="medium" />
        <img src="/img/hp.png" alt="smartphone" className="large" />
        <img src="/img/hp.png" alt="smartphone" className="medium" />
      </div>

      {/* Phone Image Mobile */}
      <div className="mobile-phone">
        <img src="/img/hp.png" alt="smartphone" />
      </div>
    </div>
  );
};

export default Hero;
