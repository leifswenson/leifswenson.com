import React from "react";
import "./Header.css";
import { Jumbotron, Container } from "reactstrap";

const Header = props => {
  return (
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">Leif Swenson</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">
            Full Stack Web Developer
          </h2>
          <a href="#about" class="btn btn-primary js-scroll-trigger">
            Lets talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
