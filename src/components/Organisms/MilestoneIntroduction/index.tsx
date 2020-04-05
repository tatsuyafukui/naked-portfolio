import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import { PrimaryButton } from '../../Atoms/Button';
import { IMilestone } from '../../../types/milestone';
import Img from 'gatsby-image';
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const MilestoneIntroduction: React.FC<IMilestone> = React.memo((props) => {

  const {className, image, heading, content, link} = props;

  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    query {
      milestoneImage: file(relativePath: { eq: "top/milestone-dummy.png" }) {
        ...servicesImage
      }
    }
  `);

  return (
    <MediaObjectLayout className={className}>
      <div>
        <Img fluid={data[image].childImageSharp.fluid} />
      </div>
      <div>
        <div>
          <Heading>{heading}</Heading>
          <Txt>{content}</Txt>
          <Link to={link}>
            <PrimaryButton>学習項目を確認する</PrimaryButton>
          </Link>
        </div>
      </div>
    </MediaObjectLayout>
  );
});

export default MilestoneIntroduction;
