import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Image';
import { ImageName } from '../../../constants';
import style from './style.css';
import { ISection } from '../../../types/section';
import {InlineSection} from "../../Atoms/Section";

const RocketSection: React.FC<ISection> = props => {
  return (
    <InlineSection
      reverse={true}
    >
      <div>
        <Image imageName={ImageName.rocketImage} />
      </div>
      <div className={style.descriptionBlock}>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
        </div>
      </div>
    </InlineSection>
  );
};

export default RocketSection;
