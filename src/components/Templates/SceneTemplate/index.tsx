import React from 'react';
import { SceneLayout } from '../../Layout';
import SEO from '../../seo';
import Scene from '../../Organisms/Scene';
import { IScene } from '../../../types';

interface IProps {
  skills: any[];
  scene: IScene;
}

const SceneTemplate: React.FC<IProps> = ({ scene, skills }) => {
  return (
    <SceneLayout>
      <SEO title={scene.heading} description={scene.description} />
      <Scene skills={skills} scene={scene} />
    </SceneLayout>
  );
};

export default SceneTemplate;
