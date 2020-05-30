import React from 'react';
import Layout from '../../Layout';
import SEO from '../../seo';
import style from './style.module.scss';
import SceneList from '../../Organisms/SceneList';
import Img, { FixedObject } from 'gatsby-image';

interface IProps {
  title: string;
  description: string;
  mainVisual: FixedObject | FixedObject[];
  scenes: any;
}

const IndexTemplate: React.FC<IProps> = props => {
  return (
    <Layout>
      <SEO title={props.title} />
      <div className={style.topSection}>
        <div className={style.container}>
          <div className={style.flex}>
            <div className={style.topSectionLeft}>
              <h1>{props.title}</h1>
              <p>{props.description}</p>
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
