import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Img';
import { ISection } from '../../../types/section';
import Section from '../../Atoms/Section';
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

const HowToUseItem: React.FC<ISection> = props => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    query {
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

  return (
    <Section>
      <Heading level={Level.h3}>{props.heading}</Heading>

      <Txt>{props.content}</Txt>
      {props.image ? (
        <div className={style.imageContainer}>
          <Img fluid={data[props.image].childImageSharp.fluid} />;
        </div>
      ) : null}
    </Section>
  );
};

export default HowToUseItem;
