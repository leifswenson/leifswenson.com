import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faNode,
  faBootstrap,
  faSass,
  faWordpress,
  faGit,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons"

import skillsStyles from "./skills.module.scss"

import { useStaticQuery, graphql } from "gatsby"

import GatsbyImage from "../../images/icons/gatsby.svg"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsDataJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  console.log(data.allSkillsDataJson.edges)

  return (
    <section>
      <div className={skillsStyles.container}>
        <hr />
        <h2 className={skillsStyles.heading}>What can I do?</h2>
        <div className="row">
          <div className={`col-lg-12 ${skillsStyles.box}`}>
            <h4 className={skillsStyles.title}>Skills</h4>
            <ul className={skillsStyles.list}>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <p>HTML5</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                <p>CSS3</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faJsSquare} size="3x" />
                <p>JavaScript</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faGit} size="3x" />
                <p>git</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faReact} size="3x" />
                <p>React.js</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faNode} size="3x" />
                <p>Node.js</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faServer} size="3x" />
                <p>Express.js</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>MongoDB</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faDatabase} size="3x" />
                <p>SQL</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faWordpress} size="3x" />
                <p>WordPress</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faSass} size="3x" />
                <p>SCSS</p>
              </li>
              <li className={skillsStyles.item}>
                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                <p>Bootstrap</p>
              </li>
              <li className={skillsStyles.item}>
                <img
                  style={{ height: 50, marginBottom: 0 }}
                  src={GatsbyImage}
                  alt="boot image"
                />
                <p>Gatsby.js</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className={`col-lg-12 ${skillsStyles.box}`}>
            <h4 className={skillsStyles.title}>Tools</h4>
            <ul className={skillsStyles.list}>
              <li className={skillsStyles.item}>GitHub</li>
              <li className={skillsStyles.item}>Heroku</li>
              <li className={skillsStyles.item}>Netlify</li>
              <li className={skillsStyles.item}>Google Analytics</li>
              <li className={skillsStyles.item}>Chrome Dev Tools</li>
              <li className={skillsStyles.item}>Postman</li>
              <li className={skillsStyles.item}>Trello</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
