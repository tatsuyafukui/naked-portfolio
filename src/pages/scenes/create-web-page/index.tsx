import React from 'react';
import SceneTemplate from '../../../components/Templates/SceneTemplate';
import { graphql, useStaticQuery } from 'gatsby';

interface IProps {
  data: any;
}

const CreateWebPagePage: React.FC<IProps> = () => {

  const data = useStaticQuery(graphql`
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
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const skills = [
    {
      id: 'HTML&CSS',
      title: '',
      link: '/scenes/create-web-page/skills/html-css',
      image: data.htmlCss.childImageSharp.fixed,
    },
  ];

  const scene = {
    id: '',
    heading: '',
    description: '',
    image: data.sceneimage.childImageSharp.fluid,
  };

  return (
    <SceneTemplate
      scene={scene}
      skills={skills}
    />
  );
};

export default CreateWebPagePage;


