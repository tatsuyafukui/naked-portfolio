import React from "react";
import { storiesOf } from "@storybook/react";
import MediaObjectLayout from "./index";

storiesOf(`Atoms/MediaObjectLayout`, module)
  .add(`デフォルト`, () => (
    <MediaObjectLayout>
      <div>
      </div>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </MediaObjectLayout>
  ))
  .add(`sectionタグ指定`, () => (
    <MediaObjectLayout tag={"section"}>
      <div>
      </div>
      <p>説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト</p>
    </MediaObjectLayout>
  ));
