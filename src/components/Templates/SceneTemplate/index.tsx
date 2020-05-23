import React from 'react';
import PropTypes from 'prop-types';
import {SceneLayout} from '../../Layout';

const SceneTemplate: React.FC = ({ children }) => {
  return <SceneLayout>{children}</SceneLayout>;
};

SceneTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SceneTemplate;
