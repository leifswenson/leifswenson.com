import React from "react";
import "./Contact.css";
import ContactForm from "../ContactForm/ContactForm";
import { Container } from "reactstrap";

const Contact = () => {
  return (
    <section className="contact-section bg-black">
      <Container>
        <ContactForm />
      </Container>
      <div className="container">
        <div className="social d-flex justify-content-center">
          <a
            href="https://www.linkedin.com/in/leif-swenson"
            className="mx-2"
            target="blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            href="https://github.com/leifswenson"
            className="mx-2"
            target="blank"
          >
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
