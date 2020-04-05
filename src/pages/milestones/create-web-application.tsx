import React from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

const CreateWebApplication = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        CreateWebApplication
      </div>
    </Layout>
  );
};

export default CreateWebApplication;
