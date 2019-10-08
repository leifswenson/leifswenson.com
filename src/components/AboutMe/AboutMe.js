import React from "react";

import aboutMeStyles from "./aboutMe.module.scss";

import LeifPhoto from "../../images/leif-swenson.jpg";

const AboutMe = () => {
  return (
    <section>
      <div className={aboutMeStyles.container}>
        <div className='row'>
          <div className={`${aboutMeStyles.imageContainer} col-lg-6`}>
            <img
              className={aboutMeStyles.image}
              src={LeifPhoto}
              alt='Leif Swenson'
            />
          </div>
          <div className='col-lg-6'>
            <h6>About Me</h6>
            <p>I am a software developer based in Minnesota.</p>
            <p>
              I have a passion for building intuitive, pragmatic applications
              with a focus on a clean minimal design.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
