import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

interface IProps {
  imageName: ImageName;
}

const Image: React.FC<IProps> = props => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    query {
      rocketImage: file(relativePath: { eq: "rocket.png" }) {
        ...servicesImage
      }
      successImage: file(relativePath: { eq: "success.png" }) {
        ...servicesImage
      }
      milestoneImage: file(relativePath: { eq: "milestone-dummy.png" }) {
        ...servicesImage
      }
    }
  `);

  return <Img fluid={data[props.imageName].childImageSharp.fluid} {...props} />;
};

export default Image;
