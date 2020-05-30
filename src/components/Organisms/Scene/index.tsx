import { Level } from '../../../constants';
import React from 'react';
import { InfoTxt } from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import Img, { FluidObject } from 'gatsby-image';
import style from './style.module.scss';
import SkillList from '../SkillList';

interface IProps {
  skills: any;
  id: string;
  title: string;
  image: FluidObject | FluidObject[];
  body: string;
  skillsHeading: string;
}

const Scene: React.FC<IProps> = props => {
  return (
    <div>
      <div className={style.title}>
        <InfoTxt>Home > {props.id}</InfoTxt>
        <Heading level={Level.h1}>{props.title}</Heading>
      </div>
      <div className={style.visual}>
        <div>
          <Img fluid={props.image} />
        </div>
      </div>
      <div className={style.body}>
        <div
          className={style.description}
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        <div className={style.skill}>
          <Heading level={Level.h5}>{props.skillsHeading}</Heading>
          <SkillList skills={props.skills} />
        </div>
      </div>
    </div>
  );
};

export default Scene;
