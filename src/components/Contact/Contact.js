import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-map-marked-alt text-primary mb-2" />
                <h4 className="text-uppercase m-0">Address</h4>
                <hr className="my-4" />
                <div className="small text-black-50">address</div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2" />
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4" />
                <div className="small text-black-50">
                  <a href="#">email</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-4 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2" />
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4" />
                <div className="small text-black-50">number</div>
              </div>
            </div>
          </div>
        </div>

        <div className="social d-flex justify-content-center">
          <a href="#" className="mx-2">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="mx-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="mx-2">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
