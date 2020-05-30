import { Level } from '../../../constants';
import React from 'react';
import { InfoTxt } from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import style from './style.module.scss';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';
import { useTranslation } from 'react-i18next';

interface IProps {
  scenes: any;
}

const SceneList: React.FC<IProps> = props => {
  const { t } = useTranslation();

  return (
    <div className={style.root}>
      {props.scenes.map((scene: any) => (
        <Link key={scene.id} to={scene.link}>
          <MediaObjectLayout>
            <div>
              <Img fixed={scene.image} backgroundColor />
            </div>
            <div style={{ padding: '32px' }}>
              <Heading level={Level.h3}>{scene.id}</Heading>
              <Heading level={Level.h2}>{scene.heading}</Heading>
              <InfoTxt>{t('Navigator.detail')}</InfoTxt>
            </div>
          </MediaObjectLayout>
        </Link>
      ))}
    </div>
  );
};

export default SceneList;
