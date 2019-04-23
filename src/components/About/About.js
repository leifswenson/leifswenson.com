import React from "react";
import Leif from "./leif.jpeg";
import "./About.css";

const About = () => {
  return (
    <div>
      <section id="about" className="about-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">About me</h2>

              <img src={Leif} className="my-picture  m-5" alt="Leif Swenson" />

              <p className="text-white-50">
                Hi. I'm a web developer based in Minnesota. I love solving
                interesting problems.
              </p>
              <p className="text-white-50 pb-3">
                Let’s solve something together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
