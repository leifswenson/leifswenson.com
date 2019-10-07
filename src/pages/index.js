import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import LeifPhoto from "../images/leif-swenson.jpg";
import LeifLogo from "../images/gatsby-astronaut.png";
const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6'>
            <h3>I'm</h3>
            <h1>Leif Swenson</h1>
            <p>a software developer</p>
            <button>Contact</button>
          </div>
          <div className='col-lg-6 col-md-5'>
            <img src={LeifPhoto} alt='Leif Swenson' />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={LeifLogo} alt='' />
          </div>
          <div className='col-lg-6'>
            <h6>About Me</h6>
            <p>I am a software developer based in Minnetonka Minnesota.</p>
            <p>
              I have a passion for building intuitive, pragmatic applications
              with a focus on a clean minimal design.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <h2>Skills & Tools</h2>
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Skills</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>node.js</li>
              <li>WordPress</li>
              <li>SCSS</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Tools</h4>
            <ul>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>netlify</li>
              <li>Google Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
