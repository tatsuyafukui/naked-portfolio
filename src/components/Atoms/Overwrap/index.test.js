import React from "react";
import { OverwrapContainer } from "./index";

describe("Overwrap", () => {
  const presenter = props => props;
  const TEST_TEXT = "Test text. Test text. Test text. Test text. Test text. "; // 55 characters

  it("maxCharsを超えてい場合、maxCharsに指定した文字数のあとを省略：境界値（下限）", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: 0,
      children: TEST_TEXT,
      textOverflow: "...",
    });
    expect(children).toEqual(["", "..."]);
  });

  it("maxCharsを超えていた場合、maxCharsに指定した文字数のあとを省略：境界値（上限）", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: 54,
      children: TEST_TEXT,
      textOverflow: "...",
    });
    expect(children).toEqual(["Test text. Test text. Test text. Test text. Test text.", "..."]);
  });

  it("maxCharsを超えていなければ何もしない：境界値（下限）", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: 55,
      children: TEST_TEXT,
      textOverflow: "...",
    });
    expect(children).toBe("Test text. Test text. Test text. Test text. Test text. ");
  });

  it("maxCharsが不適切な値の場合は何もしない", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: -1,
      children: TEST_TEXT,
      textOverflow: "...",
    });
    expect(children).toBe("Test text. Test text. Test text. Test text. Test text. ");
  });

  it("childrenが文字列以外の場合は何もしない", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: 1,
      children: <a>{TEST_TEXT}</a>,
    });
    expect(children).toEqual(<a>Test text. Test text. Test text. Test text. Test text. </a>);
  });

  it("openの場合は何もしない", () => {
    const { children } = OverwrapContainer({
      presenter,
      maxChars: 1,
      children: TEST_TEXT,
      open: true,
    });
    expect(children).toBe("Test text. Test text. Test text. Test text. Test text. ");
  });
});
