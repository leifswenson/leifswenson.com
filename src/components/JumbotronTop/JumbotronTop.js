import React from "react";
import "./JumbotronTop.css";
import { Jumbotron, Container } from "reactstrap";

const JumbotronTop = props => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Leif Swenson</h1>
          <p className="lead">Full Stack Web Developer</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronTop;
