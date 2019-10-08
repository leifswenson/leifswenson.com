import React from "react";

import skillsStyles from "./skills.module.scss";

const Skills = () => {
  return (
    <section>
      <div className='container'>
        <h2>What can I do?</h2>
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Skills</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>WordPress</li>
              <li>SCSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Tools</h4>
            <ul>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>Netlify</li>
              <li>Google Analytics</li>
              <li>Chrome Dev Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
