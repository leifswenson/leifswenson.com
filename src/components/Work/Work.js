import React, { Component } from "react";
import WorkContainer from "../WorkContainer/WorkContainer";
import workData from "../../workData.json";
import WorkCard from "../WorkCard/WorkCard";
import "./Work.css";

class Work extends Component {
  state = {
    work: workData
  };

  render() {
    return (
      <section id="work" className="projects-section bg-light">
        <div className="container">
          <h3>My Wrok</h3>
          <WorkContainer>
            {this.state.work.map(item => {
              return <WorkCard key={item.id} workData={item} />;
            })}
          </WorkContainer>
        </div>
      </section>
    );
  }
}

export default Work;
