import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  CardTitle
} from "reactstrap";
import "./WorkCard.css";

const WorkCard = props => {
  return (
    <Card>
      <CardImg
        className="img-fluid mr-3 "
        src={props.workData.image}
        alt={props.workData.title}
      />
      <CardBody>
        <CardTitle tag="h3">{props.workData.title}</CardTitle>
        <Button className="mr-2" href={props.workData.codeLink} target="blank">
          Repo
        </Button>
      </CardBody>
    </Card>
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
