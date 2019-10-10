import React from "react";

import contactFormStyles from "./contactForm.module.scss";

const ContactForm = () => {
  return (
    <div className={`container ${contactFormStyles.container}`}>
      <form
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label>Name</label>
            <input
              name='name'
              type='text'
              className='form-control'
              placeholder='Your Name'
            />
          </div>
          <div className='form-group col-md-6'>
            <label>Email</label>
            <input
              name='email'
              type='email'
              className='form-control'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-12'>
            <label>Message</label>
            <textarea
              name='message'
              class='form-control'
              placeholder='Send me a message'
            ></textarea>
          </div>
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
