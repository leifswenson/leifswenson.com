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
        <div className="row">
          <div className="col mx-auto">
            <h2 className="work-heading text-black">My Work</h2>
          </div>
        </div>
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
