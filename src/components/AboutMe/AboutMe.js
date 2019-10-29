import React from "react"

import aboutMeStyles from "./aboutMe.module.scss"

import LeifPhoto from "../../images/leif-swenson.jpg"

const AboutMe = () => {
  return (
    <section>
      <div className={aboutMeStyles.container}>
        <h2 className={aboutMeStyles.heading}>Thats Me</h2>
        <div className="row">
          <div className={`${aboutMeStyles.imageContainer} col-lg-12`}>
            <img
              className={aboutMeStyles.image}
              src={LeifPhoto}
              alt="Leif Swenson"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className={aboutMeStyles.info}>
              I am a software developer based in Minnesota.
            </p>
            <p className={aboutMeStyles.info}>
              I have a passion for building intuitive, pragmatic applications
              with a focus on a clean minimal design.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
