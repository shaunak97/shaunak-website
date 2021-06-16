import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as footerStyles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>

        <ul className={footerStyles.footerlist, footerStyles.ba}>
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
            <a className={footerStyles.anchor}>
              352-328-6779
            </a>
          </li>
          <li className={footerStyles.navItem}>
            <a className={footerStyles.anchor} href="https://www.linkedin.com/in/shaunak-sompura/" target="new">
              Linkedin
            </a>
          </li>
        </ul>

      <div className={footerStyles.creator}>
        <p>Created by Shaunak Sompura © 2021</p>
      </div>
    </footer>
  )
}

export default Footer
