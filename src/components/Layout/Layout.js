import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import SiteNav from "../SiteNav/SiteNav";
import Footer from "../Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/main.scss";
import "./layout.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className='container-fluid' style={{ margin: 0, padding: 0 }}>
      <SiteNav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
