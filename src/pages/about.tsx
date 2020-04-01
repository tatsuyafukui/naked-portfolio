import React from 'react';
import SEO from '../components/seo';
import About from '../components/Organisms/About';
import AboutTemplate from '../components/Templates/AboutTemplate';

const AboutPage = () => {
  return (
    <AboutTemplate>
      <SEO title="About" />
      <About />
    </AboutTemplate>
  );
};

export default AboutPage;
