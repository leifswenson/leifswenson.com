import React from "react";
import "./Contact.css";
//import ContactForm from "../ContactForm/ContactForm";
import { Container } from "reactstrap";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-white text-center">Contact Me</h2>
      {/* <Container>
        <ContactForm />
      </Container> */}
      <Container>
        <div className="social d-flex justify-content-center pb-5">
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
      </Container>
    </section>
  );
};

export default Contact;
