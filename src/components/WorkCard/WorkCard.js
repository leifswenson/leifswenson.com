import React from "react";

const WorkCard = props => {
  let techUsedInApp = props.workData.techUsed;
  let techArr = [];
  for (let i = 0; i < techUsedInApp.length; i++) {
    techArr.push(<li key={i}>{techUsedInApp[i]}</li>);
  }

  return (
    <div>
      <h2>Project Title: {props.workData.title}</h2>
      <h4>Tag line:{props.workData.tagLine}</h4>
      <p>Description: {props.workData.description}</p>
      <p>Category: {props.workData.category}</p>
      <p>Date: {props.workData.date}</p>
      <img src={props.workData.image} alt="#" />
      <br />
      <a href={props.workData.codeLink} target="blank">
        <button>Link to Code</button>
      </a>
      <a href={props.workData.projectLink} target="blank">
        <button>Link to app</button>
      </a>
      <ul>{techArr}</ul>
    </div>
  );
};

export default WorkCard;
