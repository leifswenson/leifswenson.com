import React from "react";
import "./Header.css";

const Header = props => {
  return (
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">Leif Swenson</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            Full Stack Web Developer
          </h2>
          <div className="social d-flex justify-content-center pb-5">
            <a
              href="https://www.linkedin.com/in/leif-swenson"
              className="mx-3"
              target="blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://github.com/leifswenson"
              className="mx-3"
              target="blank"
            >
              <i className="fab fa-github" />
            </a>
          </div>
          <a href="#contact" className="btn btn-primary js-scroll-trigger">
            Lets talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
