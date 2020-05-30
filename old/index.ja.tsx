import React from 'react';
import SceneTemplate from '../src/components/Templates/SceneTemplate';
import { graphql } from 'gatsby';

interface IProps {
  data: any;
}

const CreateWebPagePage: React.FC<IProps> = ({ data }) => {
  return (
    <SceneTemplate
      {...data}
      title={'CreateWebPage'}
      content={'aaaaaaaaaaa'}
      sceneId={1}
      skills={data.allMarkdownRemark.edges}
      image={data.icon.childImageSharp.fluid}
    />
  );
};

export default CreateWebPagePage;

/**
 * md file から生成するので、このTemplateファイルがPagesの役割を果たしている
 **/
export const query = graphql`
  query {
    icon: file(relativePath: { eq: "scenes/scene.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
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
