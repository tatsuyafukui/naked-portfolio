import React from 'react';
import PropTypes from 'prop-types';
import {SceneLayout} from '../../Layout';
import {graphql, useStaticQuery} from "gatsby";
import SEO from "../../seo";
import Scene from "../../Organisms/Scene";

const SceneTemplate: React.FC<any> = (props) => {
  return (
    <SceneLayout>
      <SEO title="Home" />
      <Scene
        skills={props.skills}
      />
    </SceneLayout>
  );
};

// SceneTemplate.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default SceneTemplate;
