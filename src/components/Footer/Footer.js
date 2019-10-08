import React from "react";

import footerStyles from "./footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.container}>
        <p className={footerStyles.content}>
          © {new Date().getFullYear()} Leif Swenson. All rights reserved.
        </p>

        <div className={footerStyles.social}>
          <ul className={footerStyles.socialList}>
            <li className={footerStyles.socialItem}>
              <a
                className={footerStyles.socialLink}
                href='https://www.linkedin.com/in/leif-swenson/'
                target='blank'
              >
                <FontAwesomeIcon icon={faLinkedin} size='2x' />
              </a>
            </li>
            <li className={footerStyles.socialItem}>
              <a
                className={footerStyles.socialLink}
                href='https://github.com/leifswenson'
                target='blank'
              >
                <FontAwesomeIcon icon={faGithubSquare} size='2x' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
