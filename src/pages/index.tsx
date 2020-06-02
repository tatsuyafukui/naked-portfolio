import React from 'react';
import IndexTemplate from '../components/Templates/IndexTemplate';
import { graphql } from 'gatsby';

interface IProps {
  data: any;
}

const IndexPage: React.FC<IProps> = ({ data }) => {

  const scenes = [
    {
      id: "シーン１",
      heading: 'Webページを作ろう',
      description: 'description',
      image: data.scene1.childImageSharp.fixed,
      link: '/scenes/create-web-page',
    },
  ];

  return (
    <IndexTemplate
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
          ...GatsbyImageSharpFixed
        }
      }
    }

    scene1: file(relativePath: { eq: "scenes/create-web-page/scene.png" }) {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
