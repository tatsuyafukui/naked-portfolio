import React from 'react';
import IndexTemplate from '../components/Templates/IndexTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Locale } from '../constants';
import { IScene } from '../types';
import { FluidObject } from 'gatsby-image';

interface IProps {
  data: any;
}

const IndexPage: React.FC<IProps> = ({ data }) => {
  const { t, i18n } = useTranslation();

  const scenes = [
    {
      id: t('Scene.scene1.id'),
      heading: t('Scene.scene1.heading'),
      description: t('Scene.scene1.description'),
      image: data.scene1.childImageSharp.fixed,
      link: '/scenes/create-web-page',
    },
    {
      id: t('Scene.scene2.id'),
      heading: t('Scene.scene2.heading'),
      description: t('Scene.scene2.description'),
      image: data.scene1.childImageSharp.fixed,
      link: '/scenes/create-web-application',
    },
  ];

  return (
    <IndexTemplate
      lang={i18n.language}
      locale={Locale.en}
      mainVisual={data.mainImage.childImageSharp.fixed}
      scenes={scenes}
    />
  );
};

export default IndexPage;

export const query = graphql`
  query {
    # top page image
    mainImage: file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    scene1: file(relativePath: { eq: "scenes/create-web-page/scene.png" }) {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
