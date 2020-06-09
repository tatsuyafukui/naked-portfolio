import React from "react";
import { storiesOf } from "@storybook/react";
import MediaObjectLayout from "./index";
import ogpSquare from "../../../mock/images/ogp-square.png";
import ogpBook from "../../../mock/images/ogp-book.png";
import ogpLarge from "../../../mock/images/ogp-large.png";
import sceneSize from "../../../mock/images/scene-size.png";

storiesOf(`Atoms/MediaObjectLayout`, module)
  .add(`Default`, () => (
    <MediaObjectLayout>
      <div>
        <img src={ogpSquare} width={100} height={100} />
      </div>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
    </MediaObjectLayout>
  ))
  .add(`Specify section tag`, () => (
    <MediaObjectLayout tag={"section"}>
      <div>
        <img src={ogpSquare} width={100} height={100} />
      </div>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
    </MediaObjectLayout>
  ))
  .add(`Specify left as role`, () => (
    <MediaObjectLayout summary={'left'}>
      <div>
        <img src={sceneSize} />
      </div>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
    </MediaObjectLayout>
  ))
  .add(`Specify right as role`, () => (
  <MediaObjectLayout summary={'right'}>
    <div>
      <img src={ogpBook} />
    </div>
    <h2>Reference site title</h2>
    <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
  </MediaObjectLayout>
  ))
  .add(`Specify top as role`, () => (
    <MediaObjectLayout summary={'top'}>
      <div>
        <img src={ogpLarge} />
      </div>
      <h2>Reference site title</h2>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
      <p>URL</p>
    </MediaObjectLayout>
  ))
  .add(`Image size is square and role is top`, () => (
    <MediaObjectLayout summary={'top'}>
      <div>
        <img src={ogpSquare} />
      </div>
      <h2>Reference site title</h2>
      <p>Explanatory text. Explanatory text.Explanatory text. Explanatory text.</p>
      <p>URL</p>
    </MediaObjectLayout>
  ));
