import React from 'react';
import SEO from '../components/seo';
import CreativeRoadMap from '../components/Organisms/CreativeRoadMap';
import IndexTemplate from '../components/Templates/IndexTemplate';

const IndexPage = () => {
  return (
    <IndexTemplate>
      <SEO title="Home" />
      <CreativeRoadMap />
    </IndexTemplate>
  );
};

export default IndexPage;
