import {storiesOf} from "@storybook/react";
import Txt, {InfoTxt, DangerTxt, SuccessTxt, WarningTxt, PrimaryTxt, WhiteTxt} from "./index";
import {FontSize} from "../../../constants";
import React from "react";

storiesOf(`Atoms/Txt`, module)
.add(`テキスト - XXS`, () => (
		<Txt fontSize={FontSize.xxs}>テキストを表示</Txt>
))
.add(`テキスト - XS`, () => (
		<Txt fontSize={FontSize.xs}>テキストを表示</Txt>
))
.add(`テキスト - S`, () => (
		<Txt fontSize={FontSize.s}>テキストを表示</Txt>
))
.add(`テキスト - M`, () => (
		<Txt>テキストを表示</Txt>
))
.add(`テキスト - L`, () => (
		<Txt fontSize={FontSize.l}>テキストを表示</Txt>
))
.add(`テキスト - XL`, () => (
		<Txt fontSize={FontSize.xl}>テキストを表示</Txt>
))
.add(`テキスト - XXL`, () => (
		<Txt fontSize={FontSize.xxl}>テキストを表示</Txt>
))
.add(`テキスト - XXXL`, () => (
		<Txt fontSize={FontSize.xxxl}>テキストを表示</Txt>
))
.add(`テキスト - XXXXL`, () => (
		<Txt fontSize={FontSize.xxxxl}>テキストを表示</Txt>
))
.add(`情報テキスト - S`, () => (
		<InfoTxt fontSize={FontSize.s}>情報テキストを表示</InfoTxt>
))
.add(`情報テキスト - M`, () => (
		<InfoTxt>情報テキストを表示</InfoTxt>
))
.add(`情報テキスト - L`, () => (
		<InfoTxt fontSize={FontSize.l}>情報テキストを表示</InfoTxt>
))
.add(`サクセステキスト - S`, () => (
		<SuccessTxt fontSize={FontSize.s}>サクセステキストを表示</SuccessTxt>
))
.add(`サクセステキスト - M`, () => (
		<SuccessTxt>サクセステキストを表示</SuccessTxt>
))
.add(`サクセステキスト - L`, () => (
		<SuccessTxt fontSize={FontSize.l}>サクセステキストを表示</SuccessTxt>
))
.add(`危険テキスト - S`, () => (
		<DangerTxt fontSize={FontSize.s}>危険テキストを表示</DangerTxt>
))
.add(`危険テキスト - M`, () => (
		<DangerTxt>危険テキストを表示</DangerTxt>
))
.add(`危険テキスト - L`, () => (
		<DangerTxt fontSize={FontSize.l}>危険テキストを表示</DangerTxt>
))
.add(`警告テキスト - S`, () => (
		<WarningTxt fontSize={FontSize.s}>警告テキストを表示</WarningTxt>
))
.add(`警告テキスト - M`, () => (
		<WarningTxt>警告テキストを表示</WarningTxt>
))
.add(`警告テキスト - L`, () => (
		<WarningTxt fontSize={FontSize.l}>警告テキストを表示</WarningTxt>
))
.add(`優先テキスト - S`, () => (
		<PrimaryTxt fontSize={FontSize.s}>優先テキストを表示</PrimaryTxt>
))
.add(`優先テキスト - M`, () => (
		<PrimaryTxt>優先テキストを表示</PrimaryTxt>
))
.add(`優先テキスト - L`, () => (
		<PrimaryTxt fontSize={FontSize.l}>優先テキストを表示</PrimaryTxt>
))
.add(`ホワイトテキスト - S`, () => (
		<WhiteTxt fontSize={FontSize.s}>ホワイトテキストを表示</WhiteTxt>
))
.add(`ホワイトテキスト - M`, () => (
		<WhiteTxt>ホワイトテキストを表示</WhiteTxt>
))
.add(`ホワイトテキスト - L`, () => (
		<WhiteTxt fontSize={FontSize.l}>ホワイトテキストを表示</WhiteTxt>
))

