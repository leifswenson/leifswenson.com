import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { Nav, Navbar } from "react-bootstrap";

const SiteNav = ({ siteTitle }) => {
  return (
    <nav id='nav-menu-container'>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>
          <Link to='/'>{siteTitle}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='home'>
              <Link to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link href='about'>
              <Link to='/about'>About</Link>
            </Nav.Link>
            <Nav.Link href='work'>
              <Link to='/work'>Work</Link>
            </Nav.Link>
            <Nav.Link href='contact'>
              <Link to='/contact'>Contact</Link>
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
