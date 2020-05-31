import React from 'react';
import SceneTemplate from '../../../components/Templates/SceneTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';
import { Locale } from '../../../constants';

interface IProps {
  data: any;
}

const CreateWebPagePage: React.FC<IProps> = ({ data }) => {
  const { t, i18n } = useTranslation();

  const skills = [
    {
      id: t('Skill.HTML&CSS.id'),
      title: t('Skill.HTML&CSS.heading'),
      link: '/scenes/create-web-page/skills/html-css',
      image: data.htmlCss.childImageSharp.fixed,
    },
  ];
  const scene = {
    id: t('Scene.scene2.id'),
    title: t('Scene.scene2.heading'),
    content: t('Scene.scene2.description'),
    image: data.sceneimage.childImageSharp.fluid,
  };

  return (
    <SceneTemplate
      lang={i18n.language}
      locale={Locale.ja}
      scene={scene}
      skills={skills}
    />
  );
};

export default CreateWebPagePage;

export const query = graphql`
  query {
    sceneimage: file(relativePath: { eq: "scenes/create-web-page/scene.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    htmlCss: file(
      relativePath: { eq: "scenes/create-web-page/skills/html-css/icon.png" }
    ) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;
