import React from "react";
import renderer from "react-test-renderer";
import Txt from "./index";

describe("Txt", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Txt>Txt</Txt>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
