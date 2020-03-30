import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import { ISection } from '../../../types/section';
import Section from "../../Atoms/Section";

const HowToUseItem: React.FC<ISection> = props => {
  return (
    <Section>
      <Heading level={Level.h3}>{props.heading}</Heading>

      <Txt>{props.content}</Txt>
      {props.image ? (
        <div className={style.imageContainer}>
          <Image imageName={props.image} />
        </div>
      ) : null}
    </Section>
  );
};

export default HowToUseItem;
