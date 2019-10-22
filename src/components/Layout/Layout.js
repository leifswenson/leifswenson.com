import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SiteNav from "../SiteNav/SiteNav"
import Footer from "../Footer/Footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/main.scss"
import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={layoutStyles.siteContainer}>
      <SiteNav siteTitle={data.site.siteMetadata.title} />
      <div className={layoutStyles.content}>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
