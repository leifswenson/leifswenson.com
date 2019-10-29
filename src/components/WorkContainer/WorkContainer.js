import React, { Component } from "react"

import WorkCard from "../WorkCard/WorkCard"
import workData from "../../data/workData.json"

import WorkContainerStyles from "./workContainer.module.scss"

class WorkContainer extends Component {
  state = {
    work: workData,
  }
  render() {
    return (
      <section className={WorkContainerStyles.container}>
        {this.state.work.map(item => {
          return <WorkCard key={item.id} workData={item} />
        })}
      </section>
    )
  }
}

export default WorkContainer
