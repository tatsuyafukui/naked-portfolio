import React from 'react';

import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Post" />
    <h1>Post</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/">Go home</Link>
  </Layout>
);

export default IndexPage;
