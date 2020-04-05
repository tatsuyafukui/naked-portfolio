import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../Layout';

const IndexTemplate: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>;
};

IndexTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IndexTemplate;
