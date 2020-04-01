import React from 'react';
import Heading from '../../components/Atoms/Heading';
import Txt from '../../components/Atoms/Txt';
import Image from '../../components/Atoms/Img';
import { ImageName } from '../../constants';
import { ISection } from '../../types/section';
import { InlineSection } from '../../components/Atoms/Section';

const RocketSection: React.FC<ISection> = props => {
  return (
    <InlineSection reverse={true}>
      <div>
        <Image imageName={ImageName.rocketImage} />
      </div>
      <div>
        <div>
          <Heading>{props.heading}</Heading>
          <Txt>{props.content}</Txt>
        </div>
      </div>
    </InlineSection>
  );
};

export default RocketSection;
