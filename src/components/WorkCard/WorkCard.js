import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import "./WorkCard.css";

const WorkCard = props => {
  return (
    <a href={props.workData.codeLink}>
      <Card>
        <CardImg
          className="img-fluid mr-3 "
          src={props.workData.image}
          alt={props.workData.title}
        />
        <CardBody>
          <CardTitle tag="h3" className="text-center">
            {props.workData.title}
          </CardTitle>
        </CardBody>
      </Card>
    </a>
    /* <div className="featured-text text-center text-lg-left">
        <p className="text-black-50 mb-0">{props.workData.description}</p>
        <ListGroup className="mr-2 d-inline-flex">
          {props.workData.techUsed.map((value, index) => {
            return <ListGroupItem key={index}>{value}</ListGroupItem>;
          })}
        </ListGroup>
        <br />
        
      </div> */
  );
};

export default WorkCard;
