import { Level } from '../../../constants';
import React from 'react';
import { InfoTxt } from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import Img, { FluidObject } from 'gatsby-image';
import style from './style.module.scss';
import SkillList from '../SkillList';
import { useTranslation } from 'react-i18next';
import { IScene } from '../../../types';

interface IProps {
  skills: any;
  scene: IScene;
}

const Scene: React.FC<IProps> = ({ skills, scene }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={style.title}>
        <InfoTxt>Home > {scene.id}</InfoTxt>
        <Heading level={Level.h1}>{scene.heading}</Heading>
      </div>
      <div className={style.visual}>
        <div>
          <Img fluid={scene.image} />
        </div>
      </div>
      <div className={style.body}>
        <div className={style.description}>
          <p dangerouslySetInnerHTML={{ __html: scene.description }} />
        </div>

        <div className={style.skill}>
          <Heading level={Level.h5}>{t('Skill.requiredSkills')}</Heading>
          <SkillList skills={skills} />
        </div>
      </div>
    </div>
  );
};

export default Scene;
