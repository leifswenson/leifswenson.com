import React from "react";
import "./WorkCard.css";

const WorkCard = props => {
  return (
    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
      <div className="col-8">
        <img className="img-fluid mr-3 " src={props.workData.image} alt="" />
      </div>
      <div className="col-4">
        <div className="featured-text text-center text-lg-left">
          <h4>{props.workData.title}</h4>
          <p className="text-black-50 mb-0">{props.workData.description}</p>
        </div>
      </div>
    </div>

    /* <Card>
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
        <Button style={style} href={props.workData.codeLink} target="blank">
          Repository
        </Button>
        <Button style={style} href={props.workData.projectLink} target="blank">
          Live {props.workData.category}
        </Button>
      </CardBody>
    </Card> */
  );
};

export default WorkCard;
