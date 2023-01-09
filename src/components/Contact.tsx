import React from "react";
import { Title } from "./emotion";

const Contact = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    alert("You Can't Send Email Right Now");
  };

  return (
    <div id="contact" className="contact-container">
      <Title size="64px">Contact</Title>

      {/* Contact Form */}
      {/* <Container className="contact-form"> */}
      <form>
        {/* Name */}
        <label htmlFor="name" className="label">
          Name :
        </label>
        <br />
        <input
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Insert your name"
        />

        {/* Email */}
        <label htmlFor="email" className="label">
          Email :
        </label>
        <br />
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Insert your email"
        />

        {/* Message */}
        <label htmlFor="message" className="label">
          Message :
        </label>
        <br />
        <textarea
          name="message"
          id="message"
          className="input msg"
          placeholder="Insert your message"
        />

        {/* Button */}
        <button type="submit" onClick={e => handleSubmit(e)}>
          Send
        </button>
      </form>
      {/* </Container> */}
    </div>
  );
};

export default Contact;
