import React from 'react';
import SkillTemplate from '../../../../../components/Templates/SkillTemplate';
import { graphql } from 'gatsby';
import { useTranslation } from 'react-i18next';

interface IProps {
  data: any;
}

const HtmlCssPage: React.FC<IProps> = ({ data }) => {
  const [t] = useTranslation();

  const skill = {
    id: t('Skill.html&css.id'),
    title: t('Skill.html&css.heading'),
    overview: t('Skill.html&css.overview.content'),
    figure: data.figure.childImageSharp.fluid,
    purpose: {
      heading: t('Skill.html&css.purpose.heading'),
      content: t('Skill.html&css.purpose.content'),
    },
    learn: {
      heading: t('Skill.html&css.learn.heading'),
      standard: {
        heading: t('Skill.html&css.learn.standard.heading'),
        basic: {
          heading: t('Skill.html&css.learn.standard.basic.heading'),
          list: [
            t('Skill.html&css.learn.standard.basic.item1'),
            t('Skill.html&css.learn.standard.basic.item2'),
            t('Skill.html&css.learn.standard.basic.item3'),
            t('Skill.html&css.learn.standard.basic.item4'),
            t('Skill.html&css.learn.standard.basic.item5'),
          ],
        },
        practical: {
          heading: t('Skill.html&css.learn.standard.practical.heading'),
          list: [
            t('Skill.html&css.learn.standard.practical.item1'),
            t('Skill.html&css.learn.standard.practical.item2'),
          ],
        },
      },
      overall: {
        heading: t('Skill.html&css.learn.overall.heading'),
        content: t('Skill.html&css.learn.overall.content'),
      },
    },
    link: '/scenes/create-web-page/skills/html-css',
    image: data.skillImage.childImageSharp.fixed,
  };

  return <SkillTemplate skill={skill} />;
};

export default HtmlCssPage;

export const query = graphql`
  query {
    skillImage: file(
      relativePath: { eq: "scenes/create-web-page/skills/html-css/icon.png" }
    ) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    figure: file(
      relativePath: { eq: "scenes/create-web-page/skills/html-css/figure.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
