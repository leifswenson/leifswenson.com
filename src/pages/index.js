import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO";
import Header from "../components/Header/Header";

import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />

    <Header />

    <AboutMe />

    <Skills />
  </Layout>
);

export default IndexPage;
