import React from 'react';
import { SceneLayout } from '../../Layout';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../../seo';
import Scene from '../../Organisms/Scene';
import { FluidObject } from 'gatsby-image';

interface IProps {
  title: string;
  skills: any[];
  id: string;
  image: FluidObject | FluidObject[];
  content: string;
  skillsHeading: string;
}

const SceneTemplate: React.FC<IProps> = props => {
  const { title, skills, id, image, content } = props;

  return (
    <SceneLayout>
      <SEO title={title} description={title} />
      <Scene
        skills={skills}
        id={id}
        title={title}
        image={image}
        body={content}
        skillsHeading={props.skillsHeading}
      />
    </SceneLayout>
  );
};

export default SceneTemplate;
