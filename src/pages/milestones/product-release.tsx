import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../../components/Templates/Layout';
import SEO from '../../components/seo';

const ProductRelease = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        ProductRelease
      </div>
    </Layout>
  );
};

export default ProductRelease;
