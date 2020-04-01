import React from 'react';
import SEO from '../components/seo';
import LetsStartProgate from '../components/Organisms/ProgateIntroduction';
import CreativeRoadMap from '../components/Organisms/CreativeRoadMap';
import IndexTemplate from '../components/Templates/IndexTemplate';

const IndexPage = () => {
  return (
    <IndexTemplate>
      <SEO title="Home" />
      <CreativeRoadMap />
      <LetsStartProgate />
    </IndexTemplate>
  );
};

export default IndexPage;
