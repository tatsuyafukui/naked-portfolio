import React from 'react';
import SceneTemplate from '../../../components/Templates/SceneTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: any;
}

const CreateWebPagePage: React.FC<IProps> = ({ data }) => {
  const { t, i18n } = useTranslation();

  const skills = [
    {
      id: t('Skill.html&css.id'),
      title: t('Skill.html&css.heading'),
      overview: t('Skill.html&css.overview.content'),
      link: '/scenes/create-web-page/skills/html-css',
      image: data.htmlCss.childImageSharp.fixed,
    },
  ];

  return (
    <SceneTemplate
      title={t('Scene.scene1.title')}
      content={t('Scene.scene1.description')}
      id={t('Scene.scene1.id')}
      skills={skills}
      skillsHeading={t('Skill.requiredSkills')}
      image={data.sceneimage.childImageSharp.fluid}
    />
  );
};

export default CreateWebPagePage;

/**
 * md file から生成するので、このTemplateファイルがPagesの役割を果たしている
 **/
export const query = graphql`
  query {
    sceneimage: file(relativePath: { eq: "scenes/scene.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    htmlCss: file(relativePath: { eq: "skills/icon/html-css.png" }) {
      childImageSharp {
        fixed(width: 70) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }

    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { frontmatter: { sceneId: { eq: 1 }, type: { eq: "skill" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            icon {
              childImageSharp {
                fixed(height: 70) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
