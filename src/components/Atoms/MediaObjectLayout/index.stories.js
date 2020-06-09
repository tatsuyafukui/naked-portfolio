import React from "react";
import { storiesOf } from "@storybook/react";
import MediaObjectLayout from "./index";
const dammy = require("../../../mock/images/img01.png");

storiesOf(`Atoms/MediaObjectLayout`, module)
  .add(`デフォルト`, () => (
    <MediaObjectLayout>
      <div>
        <img src={dammy} width={300} height={300} />
      </div>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </MediaObjectLayout>
  ))
  .add(`sectionタグ指定`, () => (
    <MediaObjectLayout tag={"section"}>
      <div>
        <img src={dammy} width={300} height={300} />
      </div>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </MediaObjectLayout>
  ));
