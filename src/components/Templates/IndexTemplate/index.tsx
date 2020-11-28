import React from 'react';
import Layout from '../../Layout';
import SEO from '../../seo';
import style from './style.module.scss';
import SceneList from '../../Organisms/SceneList';
import Img, {FixedObject} from 'gatsby-image';
import Heading from "../../Atoms/Heading";
import {Level} from "../../../constants";
import Txt from "../../Atoms/Txt";

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
              <Heading level={Level.h1}>目標へ向かう学習を</Heading>
              <Txt>Journeyはあなたが自信をもって目標へ向かうための学習ロードマップですaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Txt>
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

export const Top = ({image}: any) => (
  <div className={style.topSection}>
    <div className={style.container}>
      <div className={style.flex}>
        <div className={style.topSectionLeft}>
          <Heading level={Level.h1}>目標へ向かう学習を</Heading>
          <Txt>Journeyはあなたが自信をもって目標へ向かうための学習ロードマップです</Txt>
        </div>
        <div className={style.topSectionRight}>
          <img src={image} />
        </div>
      </div>
    </div>
  </div>
)
