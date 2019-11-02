import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.siteHeader}>
    <div className={headerStyles.container}>
      <div className="row">
        <div className="col-lg-12">
          <div className={headerStyles.headerInfo}>
            <h1 className={headerStyles.name}>I'm Leif Swenson</h1>
            <p className={headerStyles.job}>a full stack web developer</p>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
