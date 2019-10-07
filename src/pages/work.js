import React, { Component } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import workData from "../data/workData.json";
import Project from "../components/Project";

class Work extends Component {
  state = {
    work: workData
  };

  render() {
    return (
      <Layout>
        <SEO title='Work' />
        <h1>Work</h1>
        <section>
          <h2>Stuff I'v done.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            assumenda.
          </p>
        </section>
        {this.state.work.map(item => {
          return <Project key={item.id} workData={item} />;
        })}
      </Layout>
    );
  }
}

export default Work;
