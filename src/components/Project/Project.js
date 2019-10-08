import React from "react";

import projectStyles from "./project.module.scss";

const Project = props => {
  return (
    <section
      className='project'
      style={{
        backgroundColor: `${props.workData.backgroundColor}`,
        color: `${props.workData.textColor}`
      }}
    >
      <div className={`'container' ${projectStyles.container}`}>
        <div className='row'>
          <div className='col md 12'>
            {/* <div className='project-image'>
              <img src={props.workData.image} alt={props.workData.title} />
            </div> */}
            <div className={projectStyles.info}>
              <h2 className={projectStyles.heading}>{props.workData.title}</h2>
              <h3 className={projectStyles.type}>{props.workData.category}</h3>
              <p className={projectStyles.description}>
                {props.workData.description}
              </p>
              <div className={projectStyles.buttonArea}>
                <a
                  className={projectStyles.link}
                  href={props.workData.link}
                  target='blank'
                >
                  <button
                    style={{
                      backgroundColor: `${props.workData.buttonColor}`,
                      color: `${props.workData.textColor}`
                    }}
                    className={`btn btn-primary ${projectStyles.button}`}
                  >
                    Check it out
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
