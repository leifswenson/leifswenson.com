import React from "react";

const WorkCard = props => {
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
      <ul>
        {props.workData.techUsed.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

export default WorkCard;
