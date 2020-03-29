import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import { ImageName } from '../../../constants';
import style from './style.css';
import { ISection } from '../../../types/section';

const RocketSection: React.FC<ISection> = props => {
  return (
    <section className={`${style.root}`}>
      <div className={style.descriptionBlock}>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
        </div>
      </div>
      <div className={style.imageBlock}>
        <Image imageName={ImageName.rocketImage} />
      </div>
    </section>
  );
};

export default RocketSection;
