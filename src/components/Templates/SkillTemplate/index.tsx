import React, {useEffect} from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../Layout';
import SEO from '../../seo';
import Img from 'gatsby-image';
import style from './style.module.scss';
import Txt from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';
import Breadcrumb from '../../Atoms/Breadcrumb';

interface IProps {
  data: any
}

const SkillTemplate: React.FC<IProps> = ({ data}) => {

  const skill = data.markdownRemark;

  return (
    <Layout>
      <SEO title={skill.frontmatter.heading} description={skill.excerpt} />
      <div className={style.container}>
        <div className={style.titleHeader}>
          <Breadcrumb>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Scene</Link>
            <Txt>{skill.frontmatter.heading}</Txt>
          </Breadcrumb>
          <div className={style.title}>
            <span>
              <Img fixed={skill.frontmatter.icon.childImageSharp.fixed} />
            </span>
            <Heading level={Level.h1}>{skill.frontmatter.heading}</Heading>
          </div>
        </div>
        <div className={style.body}>
          <div dangerouslySetInnerHTML={{ __html: skill.html }} />
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
export default SkillTemplate;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        heading
        icon {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      excerpt
    }
  }
`;
