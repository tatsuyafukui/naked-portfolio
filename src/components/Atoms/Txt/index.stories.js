import React from "react";
import { storiesOf } from "@storybook/react";
import Txt, { InfoTxt } from "./index";

storiesOf(`Atoms/Txt`, module)
  .add(`テキスト - XXS`, () => <Txt fontSize={"xxs"}>テキストを表示</Txt>)
  .add(`テキスト - XS`, () => <Txt fontSize={"xs"}>テキストを表示</Txt>)
  .add(`テキスト - S`, () => <Txt fontSize={"s"}>テキストを表示</Txt>)
  .add(`テキスト - M`, () => <Txt>テキストを表示</Txt>)
  .add(`テキスト - L`, () => <Txt fontSize={"l"}>テキストを表示</Txt>)
  .add(`テキスト - XL`, () => <Txt fontSize={"xl"}>テキストを表示</Txt>)
  .add(`テキスト - XXL`, () => <Txt fontSize={"xxl"}>テキストを表示</Txt>)
  .add(`テキスト - XXXL`, () => <Txt fontSize={"xxxl"}>テキストを表示</Txt>)
  .add(`Infoテキスト`, () => <InfoTxt>テキストを表示</InfoTxt>);
