import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const SiteNav = ({ siteTitle }) => {
  return (
    <nav id='nav-menu-container'>
      <div>
        <p>{siteTitle}</p>
      </div>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
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
