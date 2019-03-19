import React from "react";
import { CardColumns } from "reactstrap";
import "./WorkContainer.css";

const WorkContainer = props => {
  return <CardColumns>{props.children}</CardColumns>;
};

export default WorkContainer;
