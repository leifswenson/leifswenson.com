import React from "react"

import workCardStyles from "./workCard.module.scss"

import { Card } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const WorkCard = props => {
  return (
    <Card className={` text-center ${workCardStyles.container}`}>
      <Card.Body>
        <Card.Title>{props.workData.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.workData.category}
        </Card.Subtitle>
        <Card.Text>{props.workData.description}</Card.Text>

        {props.workData.appLink === "" ? (
          ""
        ) : (
          <Card.Link
            className={workCardStyles.link}
            href={props.workData.appLink}
            target="blank"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
          </Card.Link>
        )}

        {props.workData.codeLink === "" ? (
          ""
        ) : (
          <Card.Link
            className={workCardStyles.link}
            href={props.workData.codeLink}
            target="blank"
          >
            <FontAwesomeIcon icon={faGithubSquare} size="2x" />
          </Card.Link>
        )}
      </Card.Body>
    </Card>

    // <section
    //   className="project"
    //   style={{
    //     backgroundColor: `${props.workData.backgroundColor}`,
    //     color: `${props.workData.textColor}`,
    //   }}
    // >
    //   <div className={`'container' ${projectCardStyles.container}`}>
    //     <div className="row">
    //       <div className="col md 12">
    //         {/* <div className='project-image'>
    //           <img src={props.workData.image} alt={props.workData.title} />
    //         </div> */}
    //         <div className={projectCardStyles.info}>
    //           <h2 className={projectCardStyles.heading}>
    //             {props.workData.title}
    //           </h2>
    //           <h3 className={projectCardStyles.type}>
    //             {props.workData.category}
    //           </h3>
    //           <p className={projectCardStyles.description}>
    //             {props.workData.description}
    //           </p>

    //           <ul className={projectCardStyles.buttonList}>
    //             {props.workData.codeLink === "" ? (
    //               ""
    //             ) : (
    //               <li className={projectCardStyles.buttonItem}>
    //                 <a
    //                   className={projectCardStyles.link}
    //                   href={props.workData.codeLink}
    //                   target="blank"
    //                 >
    //                   <FontAwesomeIcon icon={faGithubSquare} size="2x" />
    //                 </a>
    //               </li>
    //             )}

    //             {props.workData.appLink === "" ? (
    //               ""
    //             ) : (
    //               <li className={projectCardStyles.buttonItem}>
    //                 <a
    //                   className={projectCardStyles.link}
    //                   href={props.workData.appLink}
    //                   target="blank"
    //                 >
    //                   <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
    //                 </a>
    //               </li>
    //             )}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default WorkCard
