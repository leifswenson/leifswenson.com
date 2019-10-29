import React from "react"

import contactFormStyles from "./contactForm.module.scss"

const ContactForm = () => {
  return (
    <div className={`container ${contactFormStyles.container}`}>
      <h2>Contact me</h2>
      <form
        name="contact"
        method="POST"
        action="/formSuccess"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-control"
              placeholder="Send me a message"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <div data-netlify-recaptcha="true"></div>
          </div>
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${contactFormStyles.button}`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
