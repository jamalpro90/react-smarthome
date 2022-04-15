import React from "react";
import { Button, Container, Link, Title } from "./emotion";
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <Container>
      {/* Navbar Container */}
      <nav>
        {/* Left */}
        <div className="left">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Testimonials</Link>
          <Link>Contact</Link>
        </div>

        {/* Middle */}
        <div className="middle">
          <Title>Smart Home</Title>
        </div>

        {/* Right */}
        <div className="right">
          <Link>Download</Link>
          <Link>Login</Link>
          <Button>Sing Up</Button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
