import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../Layout';
import SEO from '../../seo';
import Img from 'gatsby-image';
import style from './style.module.scss';
import { InfoTxt } from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';

/**
 * マークダウンを読み込んでPageを作成するテンプレート
 * @param data
 * @constructor
 */
const SkillTemplate = ({ skill }: any) => {
  return (
    <Layout>
      <SEO title={skill.title} description={skill.description} />
      <div className={style.container}>
        <div className={style.titleHeader}>
          <InfoTxt className={style.menu}>
            {/* list で　props で渡す */}
            Home > シーン1 > {skill.title}
          </InfoTxt>
          <div className={style.title}>
            <span>
              <Img fixed={skill.image} />
            </span>
            <Heading level={Level.h1}>{skill.title}</Heading>
          </div>
        </div>
        <div className={style.body}>
          {/* create component  */}
          <div>
            <p dangerouslySetInnerHTML={{ __html: skill.overview }} />
            <Img fluid={skill.figure} />
            <Heading level={Level.h3}>{skill.purpose.heading}</Heading>
            <p dangerouslySetInnerHTML={{ __html: skill.purpose.content }} />
            <Heading level={Level.h2}>{skill.learn.heading}</Heading>
            <Heading level={Level.h3}>{skill.learn.standard.heading}</Heading>
            <Heading level={Level.h4}>
              {skill.learn.standard.basic.heading}
            </Heading>
            <ul>
              {skill.learn.standard.basic.list.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
            <Heading level={Level.h4}>
              {skill.learn.standard.practical.heading}
            </Heading>
            <ul>
              {skill.learn.standard.practical.list.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>

            <Heading level={Level.h3}>{skill.learn.overall.heading}</Heading>
            <p
              dangerouslySetInnerHTML={{ __html: skill.learn.overall.content }}
            />
          </div>

          <div className={style.recommend}>
            <MediaObjectLayout>
              <div></div>
              <div></div>
            </MediaObjectLayout>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        icon {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sceneId
      }
      excerpt
    }
  }
`;

export default SkillTemplate;
