import React from 'react';
import style from './style.css';
import Card from '../../Atoms/Card';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Button from '../../Atoms/Button';
import Image from '../../Atoms/Img';
import { ISection } from '../../../types/section';

const IntroductionCard: React.FC<ISection> = React.memo(props => {
  return (
    <Card className={[style.root].join(' ')}>
      <div className={style.descriptionBlock}>
        <Heading>{props.heading}</Heading>
        <Txt>{props.content}</Txt>
        <Button>{props.heading}</Button>
      </div>
      <div className={style.imageBlock}>
        <Image imageName={props.image} />
      </div>
    </Card>
  );
});

export default IntroductionCard;
