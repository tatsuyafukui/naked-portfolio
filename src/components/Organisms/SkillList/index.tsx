import { FontSize } from '../../../constants';
import React from 'react';
import Txt from '../../Atoms/Txt';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import style from './style.module.scss';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';

interface IProps {
  skills: any;
}

const SkillList: React.FC<IProps> = props => (
  <div>
    {props.skills.map((skill: any) => (
      <Link key={skill.id} to={skill.link}>
        <MediaObjectLayout className={style.mediaObjectLayout}>
          <div>
            <Img fixed={skill.image} />
          </div>
          <div className={style.skillText}>
            <Txt fontSize={FontSize.l}>{skill.title}</Txt>
            <div>></div>
          </div>
        </MediaObjectLayout>
      </Link>
    ))}
  </div>
);

export default SkillList;
