import React from 'react';
import Layout from '../../Layout';
import SEO from '../../seo';
import style from './style.module.scss';
import SceneList from '../../Organisms/SceneList';
import Img, { FixedObject } from 'gatsby-image';

interface IProps {
  mainVisual: FixedObject | FixedObject[];
  scenes: any[];
}

const IndexTemplate: React.FC<IProps> = props => {

  return (
    <Layout>
      <SEO
        title={''}
        description={''}
      />
      <div className={style.topSection}>
        <div className={style.container}>
          <div className={style.flex}>
            <div className={style.topSectionLeft}>
              <h1>目標へ向かう学習を</h1>
              <p>s</p>
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
