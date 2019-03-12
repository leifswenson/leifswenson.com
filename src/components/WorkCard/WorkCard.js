import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const WorkCard = props => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src={props.workData.image}
        alt={props.workData.title}
      />
      <CardBody>
        <CardTitle tag="h3">{props.workData.title}</CardTitle>
        <CardSubtitle>{props.workData.tagLine}</CardSubtitle>
        <CardText>{props.workData.description}</CardText>
        <ListGroup>
          {props.workData.techUsed.map((value, index) => {
            return <ListGroupItem key={index}>{value}</ListGroupItem>;
          })}
        </ListGroup>
        <br />
        <Button href={props.workData.codeLink} target="blank">
          Repository
        </Button>
        <Button href={props.workData.projectLink} target="blank">
          Live {props.workData.category}
        </Button>
      </CardBody>
    </Card>
  );
};

export default WorkCard;
