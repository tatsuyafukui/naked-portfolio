import React from 'react';
import Heading from '../../Atoms/Heading';
import {ImageName, Level} from '../../../constants';
import style from './style.module.scss';
import {graphql, useStaticQuery, Link} from 'gatsby';
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";
import {InfoTxt} from "../../Atoms/Txt";
import Img from "gatsby-image";
import Image from "../../Atoms/Img";
import SceneList from "../SceneList";

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
      sceneImage: file(relativePath: { eq: "scenes/scene.png" }) {
        ...sceneImage
      }
      allMarkdownRemark(sort: { fields: [frontmatter___sceneId], order: ASC }, filter: {frontmatter: {type: {eq: "scene"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              sceneId
              icon {
                childImageSharp {
                  fixed(width: 440) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const scenes = data.allMarkdownRemark.edges;
  console.log(scenes)

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
          <SceneList
            scenes={scenes}
          />
        </div>
      </div>

    </>
  );
});

export default CreativeRoadMap;
