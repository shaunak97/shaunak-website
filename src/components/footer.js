import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.list}>
        <ul className={footerStyles.footerlist}>
          <li className={footerStyles.navItem}>
            <a className={footerStyles.anchor} href="https://github.com/shaunak97" target="new">
              Github
            </a>
          </li>
          <li className={footerStyles.navItem}>
            <a className={footerStyles.anchor} href="mailto:shaunaksompura@gmail.com" target="new">
              Email
            </a>
          </li>
          <li className={footerStyles.navItem}>
            352-328-6779
          </li>
          <li className={footerStyles.navItem}>
            <a className={footerStyles.anchor} href="https://www.linkedin.com/in/shaunak-sompura/" target="new">
              linkedin
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Created by Shaunak Sompura © 2021</p>
      </div>
    </footer>
  )
}

export default Footer
