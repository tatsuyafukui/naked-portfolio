import React from 'react';
import Layout from '../../Layout';
import SEO from '../../seo';
import style from './style.module.scss';
import SceneList from '../../Organisms/SceneList';
import Img, { FixedObject } from 'gatsby-image';
import { Locale } from '../../../constants';
import { IScene } from '../../../types';

import { useTranslation } from 'react-i18next';

interface IProps {
  mainVisual: FixedObject | FixedObject[];
  scenes: any[];
  locale: Locale;
  lang: string;
}

const IndexTemplate: React.FC<IProps> = props => {
  const { t } = useTranslation();

  return (
    <Layout locale={props.locale}>
      <SEO
        title={t('TopTitle.title')}
        description={t('TopTitle.description')}
        lang={props.lang}
      />
      <div className={style.topSection}>
        <div className={style.container}>
          <div className={style.flex}>
            <div className={style.topSectionLeft}>
              <h1>{t('TopTitle.title')}</h1>
              <p>{t('TopTitle.description')}</p>
            </div>
            <div className={style.topSectionRight}>
              <Img fixed={props.mainVisual} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.sceneSection}>
        <div className={style.container}>
          <SceneList scenes={props.scenes} />
        </div>
      </div>
    </Layout>
  );
};

export default IndexTemplate;
