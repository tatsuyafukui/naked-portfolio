import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { LogoName } from '../../../constants';

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
  logoName: LogoName;
}

const Logo: React.FC<IProps> = props => {
  const data = useStaticQuery(graphql`
    fragment servicesLogo on File {
      childImageSharp {
        fixed(height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query {
      headerLogo: file(relativePath: { eq: "logo/symbol-white.png" }) {
        ...servicesLogo
      }
      inlineLogo: file(relativePath: { eq: "logo/logo-inline.png" }) {
        ...servicesLogo
      }
      whiteLogo: file(relativePath: { eq: "logo/logo-white.png" }) {
        ...servicesLogo
      }
      journeyLogo: file(relativePath: { eq: "logo/journey-logo.png" }) {
        ...servicesLogo
      }
    }
  `);
  return (
    <Img
      fixed={data[props.logoName].childImageSharp.fixed}
      alt={'Progate Roadmap Logo'}
    />
  );
};

export default Logo;
