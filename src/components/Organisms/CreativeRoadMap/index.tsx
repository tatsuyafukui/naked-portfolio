import React from 'react';
import Heading from '../../Atoms/Heading';
import {ImageName, Level} from '../../../constants';
import style from './style.module.scss';
import {graphql, useStaticQuery} from 'gatsby';
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";
import {InfoTxt} from "../../Atoms/Txt";
import Img from "gatsby-image";
import Image from "../../Atoms/Img";

const CreativeRoadMap: React.FC = React.memo(() => {

  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fragment mainImage on File {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    fragment sceneImage on File {
      childImageSharp {
        fixed(width: 440) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    query {
      # top page image
      mainImage: file(relativePath: { eq: "about/main.jpg" }) {
        ...mainImage
      }
      sceneImage: file(relativePath: { eq: "about/scene.png" }) {
        ...sceneImage
      }
    }
  `);

  return (
    <>
      <div className={style.topSection}>
        <div className={style.container}>
          <div className={style.flex}>
            <div className={style.topSectionLeft}>
              <h1>目標へ向かう学習を</h1>
              <p>Journeyはあなたが自信をもって<br/>
                目標へ向かうための学習ロードマップです</p>
            </div>
            <div className={style.topSectionRight}>
              <Img
                fixed={data.mainImage.childImageSharp.fixed} />
            </div>
            </div>
        </div>
      </div>
      <div className={style.sceneSection}>
        <div className={style.container}>
          <MediaObjectLayout>
            <div>
              <Img
                fixed={data.sceneImage.childImageSharp.fixed}
                backgroundColor
              />
            </div>
            <div style={{padding: "32px"}}>
              <Heading level={Level.h3}>シーン1</Heading>
              <Heading level={Level.h2}>Webページを作れるようになろう</Heading>
              <InfoTxt>詳細を見る</InfoTxt>
            </div>
          </MediaObjectLayout>
          <MediaObjectLayout>
            <div>
              <Img
                fixed={data.sceneImage.childImageSharp.fixed}
                backgroundColor
              />
            </div>
            <div style={{padding: "32px"}}>
              <Heading level={Level.h3}>シーン1</Heading>
              <Heading level={Level.h2}>Webページを作れるようになろう</Heading>
              <InfoTxt>詳細を見る</InfoTxt>
            </div>
          </MediaObjectLayout>
          <MediaObjectLayout>
            <div>
              <Img
                fixed={data.sceneImage.childImageSharp.fixed}
                backgroundColor
              />
            </div>
            <div style={{padding: "32px"}}>
              <Heading level={Level.h3}>シーン1</Heading>
              <Heading level={Level.h2}>Webページを作れるようになろう</Heading>
              <InfoTxt>詳細を見る</InfoTxt>
            </div>
          </MediaObjectLayout>
          <MediaObjectLayout>
            <div>
              <Img
                fixed={data.sceneImage.childImageSharp.fixed}
                backgroundColor
              />
            </div>
            <div style={{padding: "32px"}}>
              <Heading level={Level.h3}>シーン1</Heading>
              <Heading level={Level.h2}>Webページを作れるようになろう</Heading>
              <InfoTxt>詳細を見る</InfoTxt>
            </div>
          </MediaObjectLayout>
          <MediaObjectLayout>
            <div>
              <Img
                fixed={data.sceneImage.childImageSharp.fixed}
                backgroundColor
              />
            </div>
            <div style={{padding: "32px"}}>
              <Heading level={Level.h3}>シーン1</Heading>
              <Heading level={Level.h2}>Webページを作れるようになろう</Heading>
              <InfoTxt>詳細を見る</InfoTxt>
            </div>
          </MediaObjectLayout>
        </div>
      </div>

    </>
  );
});

export default CreativeRoadMap;
