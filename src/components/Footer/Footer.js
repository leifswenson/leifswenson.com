import React from "react";

import footerStyles from "./footer.module.scss";

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
                LinkedIn
              </a>
            </li>
            <li className={footerStyles.socialItem}>
              <a
                className={footerStyles.socialLink}
                href='https://github.com/leifswenson'
                target='blank'
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
