import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./ContactForm.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div id="contact">
        <Form
          action="POST"
          data-netlify="true"
          className="form-section"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="bot-field" />
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

          <Button className="btn btn-primary mx-auto">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
