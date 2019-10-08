import React from "react";

import skillsStyles from "./skills.module.scss";

const Skills = () => {
  return (
    <section>
      <div className='container'>
        <h2 className={skillsStyles.heading}>What can I do?</h2>
        <div className='row'>
          <div className='col-lg-6'>
            <h4 className={skillsStyles.title}>Skills</h4>
            <ul className={skillsStyles.list}>
              <li className={skillsStyles.item}>HTML5</li>
              <li className={skillsStyles.item}>CSS3</li>
              <li className={skillsStyles.item}>JavaScript</li>
              <li className={skillsStyles.item}>React.js</li>
              <li className={skillsStyles.item}>Node.js</li>
              <li className={skillsStyles.item}>Express.js</li>
              <li className={skillsStyles.item}>MongoDB</li>
              <li className={skillsStyles.item}>SQL</li>
              <li className={skillsStyles.item}>WordPress</li>
              <li className={skillsStyles.item}>SCSS</li>
              <li className={skillsStyles.item}>Bootstrap</li>
            </ul>
          </div>
          <div className='col-lg-6'>
            <h4 className={skillsStyles.title}>Tools</h4>
            <ul className={skillsStyles.list}>
              <li className={skillsStyles.item}>GitHub</li>
              <li className={skillsStyles.item}>Heroku</li>
              <li className={skillsStyles.item}>Netlify</li>
              <li className={skillsStyles.item}>Google Analytics</li>
              <li className={skillsStyles.item}>Chrome Dev Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
