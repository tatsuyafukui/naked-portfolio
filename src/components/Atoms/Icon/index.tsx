import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { IconName } from '../../../constants';

interface IProps {
  iconName: IconName;
}

const Icon: React.FC<IProps> = props => {
  const data = useStaticQuery(graphql`
    fragment servicesIcon on File {
      childImageSharp {
        fixed(height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query {
      goal: file(relativePath: { eq: "icon/goal.png" }) {
        ...servicesIcon
      }
      light: file(relativePath: { eq: "icon/light.png" }) {
        ...servicesIcon
      }
      stairs: file(relativePath: { eq: "icon/stairs.png" }) {
        ...servicesIcon
      }
      test: file(relativePath: { eq: "icon/test.png" }) {
        ...servicesIcon
      }
      left: file(relativePath: { eq: "icon/left.png" }) {
        ...servicesIcon
      }
      rightTriangle: file(relativePath: { eq: "icon/right-triangle.png" }) {
        ...servicesIcon
      }
    }
  `);

  return <Img fixed={data[props.iconName].childImageSharp.fixed} {...props} />;
};

export default Icon;
