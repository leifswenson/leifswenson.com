import React from "react";

const Project = props => {
  return (
    <section
      className='project'
      style={{
        backgroundColor: `${props.workData.backgroundColor}`,
        color: `${props.workData.textColor}`
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col md 12'>
            <div className='project-image'>
              <img src={props.workData.image} alt={props.workData.title} />
            </div>
            <div className='project-info'>
              <h2 className='project-heading'>{props.workData.title}</h2>
              <h3 className='project-type'>{props.workData.category}</h3>
              <p className='project-description'>
                {props.workData.description}
              </p>
              <a href={props.workData.link} target='blank'>
                <button>Check it out</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
