import React from 'react';
import IndexTemplate from '../components/Templates/IndexTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: any;
}

const IndexPage: React.FC<IProps> = ({ data }) => {
  const { t, i18n } = useTranslation();
  console.log(i18n);

  const scenes = [
    {
      id: t('Scene.scene1.id'),
      title: t('Scene.scene1.title'),
      description: t('Scene.scene1.description'),
      image: data.scene1.childImageSharp.fixed,
      link: '/scenes/create-web-page',
      linkText: t('Navigator.detail'),
    },
    {
      id: t('Scene.scene2.id'),
      title: t('Scene.scene2.title'),
      description: t('Scene.scene2.description'),
      image: data.scene1.childImageSharp.fixed,
      link: '/scenes/create-web-page',
      linkText: t('Navigator.detail'),
    },
  ];

  return (
    <IndexTemplate
      title={t('TopTitle.title')}
      description={t('TopTitle.description')}
      mainVisual={data.mainImage.childImageSharp.fixed}
      scenes={scenes}
    />
  );
};

export default IndexPage;

export const query = graphql`
  query {
    # top page image
    mainImage: file(relativePath: { eq: "about/main.jpg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    scene1: file(relativePath: { eq: "scenes/scene.png" }) {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
