import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { GatsbyImageProps } from 'gatsby-image';
import { ImageName } from '../../../constants';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface IProps extends GatsbyImageProps {
  imageName: ImageName;
}

const Image: React.FC<IProps> = ({ imageName, ...props }) => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fragment mainImage on File {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fragment sceneImage on File {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query {
      # top page image
      mainImage: file(relativePath: { eq: "about/main.jpg" }) {
        ...mainImage
      }
      sceneImage: file(relativePath: { eq: "about/scene.png" }) {
        ...sceneImage
      }
    }
  `);

  return <Img {...props} fluid={data[imageName].childImageSharp.fluid} />;
};

export default Image;
