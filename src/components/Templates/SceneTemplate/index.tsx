import React from 'react';
import { SceneLayout } from '../../Layout';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../../seo';
import Scene from '../../Organisms/Scene';
import { FluidObject } from 'gatsby-image';
import { Locale } from '../../../constants';
import { IScene } from '../../../types';

interface IProps {
  skills: any[];
  scene: IScene;
  locale: Locale;
  lang: string;
}

const SceneTemplate: React.FC<IProps> = ({ scene, lang, locale, skills }) => {
  return (
    <SceneLayout locale={locale}>
      <SEO title={scene.heading} description={scene.description} lang={lang} />
      <Scene skills={skills} scene={scene} />
    </SceneLayout>
  );
};

export default SceneTemplate;
