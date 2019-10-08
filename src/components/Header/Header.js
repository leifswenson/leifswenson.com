import React from "react";

import headerStyles from "./header.module.scss";
import headerImage from "../../images/golf.png";

const Header = () => (
  <header className={headerStyles.siteHeader}>
    <div className={headerStyles.container}>
      <div className='row'>
        <div className='col-lg-12'>
          <div className={headerStyles.headerInfo}>
            <h1 className={headerStyles.name}>I'm Leif Swenson</h1>
            <p className={headerStyles.job}>
              a software developer & golf enthusiast
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className={headerStyles.imageContainer}>
          <img
            className={headerStyles.image}
            src={headerImage}
            alt='golf hole'
          />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
