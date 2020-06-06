import React from "react";
import styles from "./styles.module.scss";
import Img from "gatsby-image";
import Heading from "../../Atoms/Heading";
import Txt from "../../Atoms/Txt";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const SceneList = ({ scenes }) => (
  <div>
    {scenes.map(scene => (
      <MediaObjectLayout key={scene.id} className={styles.root}>
        <div>
          <Img fixed={scene.image.childImageSharp.fixed} />
        </div>
        <div className={styles.right}>
          <Heading level={3}>{scene.id}</Heading>
          <Heading level={2}>{scene.heading}</Heading>
          <Txt>詳細を見る</Txt>
        </div>
      </MediaObjectLayout>
    ))}
  </div>
);

export default SceneList;
