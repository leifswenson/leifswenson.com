import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Nav, Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

import navStyles from "./siteNav.module.scss"

const SiteNav = ({ siteTitle }) => {
  return (
    <nav>
      <Navbar
        className={`fixed-top ${navStyles.container}`}
        bg="light"
        expand="md"
      >
        <Navbar.Brand as="span">
          <Link
            className={navStyles.title}
            activeClassName={navStyles.activeNavItem}
            to="/"
          >
            {siteTitle}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link eventKey="/">
                <Link
                  className={navStyles.navItem}
                  activeClassName={navStyles.activeNavItem}
                  to="/"
                >
                  Home
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="work">
                <Link
                  className={navStyles.navItem}
                  activeClassName={navStyles.activeNavItem}
                  to="/work"
                >
                  Work
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contact">
                <Link
                  className={navStyles.navItem}
                  activeClassName={navStyles.activeNavItem}
                  to="/contact"
                >
                  Contact
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav>
              <Nav.Item>
                <Nav.Link href="linkedin">
                  <a
                    className={navStyles.navItem}
                    href="https://github.com/leifswenson"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                  </a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="github">
                  <a
                    className={navStyles.navItem}
                    href="https://www.linkedin.com/in/leif-swenson/"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

SiteNav.propTypes = {
  siteTitle: PropTypes.string,
}

SiteNav.defaultProps = {
  siteTitle: ``,
}

export default SiteNav
