import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Organisms/Header';
import './layout.module.scss';
import './layout.module.scss';
import Footer from '../Organisms/Footer';

const Index = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export const SceneLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
        }}
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

