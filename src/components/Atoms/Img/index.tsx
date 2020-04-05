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
    query {
      # top page image
      rocketImage: file(relativePath: { eq: "top/rocket.png" }) {
        ...servicesImage
      }
      successImage: file(relativePath: { eq: "top/success.png" }) {
        ...servicesImage
      }
      milestoneImage: file(relativePath: { eq: "top/milestone-dummy.png" }) {
        ...servicesImage
      }
      pathNodeImage: file(relativePath: { eq: "top/path-nodejs.png" }) {
        ...servicesImage
      }

      # about page image
      goalImage: file(relativePath: { eq: "about/goal-image.png" }) {
        ...servicesImage
      }
      selectMilestoneImage: file(
        relativePath: { eq: "about/select-milestone.png" }
      ) {
        ...servicesImage
      }
      aroundImage: file(relativePath: { eq: "about/around.png" }) {
        ...servicesImage
      }
      deepLearnImage: file(relativePath: { eq: "about/deep-learn.png" }) {
        ...servicesImage
      }
      outputImage: file(relativePath: { eq: "about/output.png" }) {
        ...servicesImage
      }
      whyImage: file(relativePath: { eq: "about/why.png" }) {
        ...servicesImage
      }
    }
  `);

  return <Img {...props} fluid={data[imageName].childImageSharp.fluid} />;
};

export default Image;
