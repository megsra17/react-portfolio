import React, { useState } from "react";
import Particle from "../components/Particle";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = {
      ...formState,
      [name]: value,
    };
    setFormState(updatedFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div id="contact" className="container my-2">
        <h2>Get in Touch</h2>
      </div>
      <form
        id="form-container"
        className="container my-3"
        onSubmit={handleSubmit}
      >
        <div className="form-group my-3">
          <label htmlFor="nameInput">Name</label>
          <input
            name="name"
            onChange={handleChange}
            value={formState.name}
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="emailInput">Email address</label>
          <input
            name="email"
            onChange={handleChange}
            value={formState.email}
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group my-3">
          <label htmlFor="messageInput">Message</label>
          <textarea
            rows="5"
            name="message"
            onChange={handleChange}
            value={formState.message}
            className="form-control"
            id="messageInput"
            placeholder="Send me a message"
            required
          />
        </div>
        <button id="contactBtn" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Contact;
