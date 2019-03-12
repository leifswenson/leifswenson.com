import React from "react";
import { CardColumns } from "reactstrap";

const WorkContainer = props => {
  return <CardColumns>{props.children}</CardColumns>;
};

export default WorkContainer;
