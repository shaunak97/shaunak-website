import * as React from 'react';
import Layout from '../components/layout';
import aboutStyles from "./about.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </div>
    </Layout>
  )
}

export default AboutPage
