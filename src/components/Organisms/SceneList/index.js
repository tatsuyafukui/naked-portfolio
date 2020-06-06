import React from "react";
import Img from "gatsby-image";
import Heading from "../../Atoms/Heading";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const SceneList = ({ scenes }) => (
  <div>
    {scenes.map(scene => (
      <MediaObjectLayout key={scene.id}>
        <div>
          <Img fixed={scene.image.childImageSharp.fixed} />
        </div>
        <div style={{ padding: "32px" }}>
          <Heading level={3}>{scene.id}</Heading>
          <Heading level={2}>{scene.heading}</Heading>
          <p>詳細を見る</p>
        </div>
      </MediaObjectLayout>
    ))}
  </div>
);

export default SceneList;
