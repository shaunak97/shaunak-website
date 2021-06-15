import * as React from 'react';
import Header from "./../components/header";
import Footer from "./../components/footer";
import * as layoutStyles from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <title>{pageTitle}</title>
          <Header />
          <h1>{pageTitle}</h1>
          {children}
      </div>
          <Footer />    
    </main>
  )
}

export default Layout
