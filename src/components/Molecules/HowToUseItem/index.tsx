import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import { ISection } from '../../../types/section';

const HowToUseItem: React.FC<ISection> = props => {
  return (
    <section className={style.root}>
      <Heading level={Level.h3}>{props.heading}</Heading>

      <Txt>{props.content}</Txt>
      {props.image ? (
        <div className={style.imageContainer}>
          <Image imageName={props.image} />
        </div>
      ) : null}
    </section>
  );
};

export default HowToUseItem;
