import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as headerStyles from './header.module.css';

const Header = () => {
  return (
    <nav className={headerStyles.headerContainer}>
      <div className={headerStyles.leftTitle}>
        <Link className={headerStyles.title}
              to="/"
              activeClassName={headerStyles.activeNavItem}>
              SHAUNAK SOMPURA
        </Link>
      </div>
      <div className={headerStyles.rightMenu}>
        <Link className={headerStyles.title}
              to="/about"
              activeClassName={headerStyles.activeNavItem}>
              About
        </Link>
      </div>
    </nav>
  )
}

export default Header
