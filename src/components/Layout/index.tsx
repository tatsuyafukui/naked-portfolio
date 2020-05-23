import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Organisms/Header';
import './layout.module.scss';
import Footer from '../Organisms/Footer';

const Index = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        // }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
