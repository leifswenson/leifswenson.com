import React, { Component } from "react";
import WorkContainer from "../WorkContainer/WorkContainer";
import workData from "../../workData.json";
import WorkCard from "../WorkCard/WorkCard";

class Work extends Component {
  state = {
    work: workData
  };

  render() {
    return (
      <div>
        <h1>This is the work</h1>
        <WorkContainer>
          {this.state.work.map(item => {
            return <WorkCard key={item.id} workData={item} />;
          })}
        </WorkContainer>
      </div>
    );
  }
}

export default Work;
