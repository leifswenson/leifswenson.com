import React from "react"

import projectStyles from "./project.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const Project = props => {
  return (
    <section
      className="project"
      style={{
        backgroundColor: `${props.workData.backgroundColor}`,
        color: `${props.workData.textColor}`,
      }}
    >
      <div className={`'container' ${projectStyles.container}`}>
        <div className="row">
          <div className="col md 12">
            {/* <div className='project-image'>
              <img src={props.workData.image} alt={props.workData.title} />
            </div> */}
            <div className={projectStyles.info}>
              <h2 className={projectStyles.heading}>{props.workData.title}</h2>
              <h3 className={projectStyles.type}>{props.workData.category}</h3>
              <p className={projectStyles.description}>
                {props.workData.description}
              </p>

              <ul className={projectStyles.buttonList}>
                {props.workData.codeLink === "" ? (
                  ""
                ) : (
                  <li className={projectStyles.buttonItem}>
                    <a
                      className={projectStyles.link}
                      href={props.workData.codeLink}
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                    </a>
                  </li>
                )}

                {props.workData.appLink === "" ? (
                  ""
                ) : (
                  <li className={projectStyles.buttonItem}>
                    <a
                      className={projectStyles.link}
                      href={props.workData.appLink}
                      target="blank"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
