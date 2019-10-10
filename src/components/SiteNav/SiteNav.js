import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

import navStyles from "./siteNav.module.scss";

const SiteNav = ({ siteTitle }) => {
  return (
    <nav>
      <Navbar
        className={`fixed-top ${navStyles.container}`}
        bg='light'
        expand='lg'
      >
        <Navbar.Brand href='#home'>
          <Link className={navStyles.link} to='/'>
            {siteTitle}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='home'>
              <Link
                className={navStyles.link}
                activeClassName={navStyles.activeLink}
                to='/'
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link href='work'>
              <Link
                className={navStyles.link}
                activeClassName={navStyles.activeLink}
                to='/work'
              >
                Work
              </Link>
            </Nav.Link>

            <Nav.Link href='contact'>
              <Link
                className={navStyles.link}
                activeClassName={navStyles.activeLink}
                to='/contact'
              >
                Contact
              </Link>
            </Nav.Link>

            <Nav className='ml-5'>
              <Nav.Link href='linkedin'>
                <a
                  className={`${navStyles.socialLink} ${navStyles.link}`}
                  href='https://github.com/leifswenson'
                  target='blank'
                >
                  <FontAwesomeIcon icon={faGithubSquare} size='2x' />
                </a>
              </Nav.Link>
              <Nav.Link href='github'>
                <a
                  className={`${navStyles.socialLink} ${navStyles.link}`}
                  href='https://www.linkedin.com/in/leif-swenson/'
                  target='blank'
                >
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />
                </a>
              </Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

SiteNav.propTypes = {
  siteTitle: PropTypes.string
};

SiteNav.defaultProps = {
  siteTitle: ``
};

export default SiteNav;
