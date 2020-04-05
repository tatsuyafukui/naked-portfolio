import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../Layout';

const AboutTemplate: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

AboutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AboutTemplate;
