import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Button from '../../Atoms/Button';
import { IMilestone } from '../../../types/milestone';
import { InlineSection } from '../../Atoms/Section';
import Img from 'gatsby-image';

const MilestoneIntroduction: React.FC<IMilestone> = React.memo(props => {
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
    <InlineSection reverse={props.reverse}>
      <div>
        <Img fluid={data[props.image].childImageSharp.fluid} />;
      </div>
      <div>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
          <Link to={props.link}>
            <Button>学習項目を確認する</Button>
          </Link>
        </div>
      </div>
    </InlineSection>
  );
});

export default MilestoneIntroduction;
