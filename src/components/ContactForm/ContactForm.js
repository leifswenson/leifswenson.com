import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./ContactForm.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div id="contact">
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          className="form-section"
          data-netlify-honeypot="bot-field"
          data-netlify-recaptcha="true"
        >
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="e-mail"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="title"
              name="title"
              id="title"
              placeholder="message title"
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="message"
            />
          </FormGroup>
          <FormGroup>
            <Input data-netlify-recaptcha="true" />
          </FormGroup>

          <Button className="btn btn-primary mx-auto">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
