import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About me</h2>
              <p className="text-white-50">
                This is where I will say who I am.
              </p>
            </div>
          </div>
          <img src="#" className="img-fluid" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
