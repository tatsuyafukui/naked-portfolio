import React from 'react';

import Layout from '../components/Templates/Layout';
import SEO from '../components/seo';
import ForBeginnersSection from '../old/ForBeginnersSection';
import HowToUseSection from '../old/HowToUseSection';
import { ImageName } from '../constants';
import LsetsStartSection from '../old/LetsStartSection';
import About from "../components/Organisms/About";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <About/>
    </Layout>
  );
};

export default AboutPage;
