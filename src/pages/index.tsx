import React from 'react';
import Layout from '../components/Templates/Layout';
import SEO from '../components/seo';
import LetsStartProgate from '../components/Organisms/ProgateIntroduction';
import CreativeRoadMap from "../components/Organisms/CreativeRoadMap";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <CreativeRoadMap/>
      <LetsStartProgate />
    </Layout>
  );
};

export default IndexPage;
