import React from "react"

import aboutMeStyles from "./aboutMe.module.scss"

import LeifPhoto from "../../images/leif-swenson.jpg"

const AboutMe = () => {
  return (
    <section>
      <div className={aboutMeStyles.container}>
        <hr />
        <h2 className={aboutMeStyles.heading}>About Me</h2>
        <div className="row">
          <div className={`${aboutMeStyles.imageContainer} col-lg-6`}>
            <img
              className={aboutMeStyles.image}
              src={LeifPhoto}
              alt="Leif Swenson"
            />
          </div>
          <div className={`${aboutMeStyles.infoContainer} col-lg-6`}>
            <div>
              <p className={aboutMeStyles.info}>
                I'm a full stack web developer based in Minnesota.
              </p>
              <p className={aboutMeStyles.info}>
                I have a passion for building intuitive, pragmatic applications
                with a focus on a clean minimal design.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
