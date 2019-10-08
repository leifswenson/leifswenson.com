import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { Nav, Navbar } from "react-bootstrap";

import navStyles from "./siteNav.module.scss";

const SiteNav = ({ siteTitle }) => {
  return (
    <nav id='nav-menu-container'>
      <Navbar className='fixed-top' bg='light' expand='md'>
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
            <Nav.Link href='about'>
              <Link
                className={navStyles.link}
                activeClassName={navStyles.activeLink}
                to='/about'
              >
                About
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
