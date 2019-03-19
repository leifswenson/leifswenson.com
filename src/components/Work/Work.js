import React, { Component } from "react";
import WorkContainer from "../WorkContainer/WorkContainer";
import workData from "../../workData.json";
import WorkCard from "../WorkCard/WorkCard";
import { Container } from "reactstrap";
import "./Work.css";

class Work extends Component {
  state = {
    work: workData
  };

  render() {
    return (
      <section id="work" className="projects-section bg-light">
        <h3>My Work</h3>
        <Container>
          <WorkContainer>
            {this.state.work.map(item => {
              return <WorkCard key={item.id} workData={item} />;
            })}
          </WorkContainer>
        </Container>
      </section>
    );
  }
}

export default Work;
