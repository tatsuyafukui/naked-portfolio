import React from "react";
import { storiesOf } from "@storybook/react";
import HeadingOverlay, { Front, Back } from "./index";
import sceneSize from "../../../mock/images/scene-size.png";

storiesOf(`Molecules/HeadingOverlay`, module)
  .add(`Default`, () => (
    <HeadingOverlay style={{width: "300px", height: "200px"}}>
      <Back>
        <img src={sceneSize}/>
      </Back>
      <Front>
        <h1 style={{color: "white"}}>Title</h1>
      </Front>
    </HeadingOverlay>
  ))
  .add(`Background image reduction`, () => (
    <HeadingOverlay style={{width: "300px", height: "300px"}}>
      <Back>
        <img src={sceneSize}/>
      </Back>
      <Front>
        <h1 style={{color: "white"}}>Title</h1>
      </Front>
    </HeadingOverlay>
  ))
  .add(`Multiple foreground text`, () => (
    <HeadingOverlay style={{width: "300px", height: "200px"}}>
      <Back>
        <img src={sceneSize}/>
      </Back>
      <Front>
        <div>
          <h1 style={{color: "white"}}>Title</h1>
          <p style={{color: "white"}}>description</p>
        </div>
      </Front>
    </HeadingOverlay>
  ))
  .add(`Background is color only`, () => (
    <HeadingOverlay style={{width: "300px", height: "200px"}}>
      <Back>
        <div style={{backgroundColor: "red"}}/>
      </Back>
      <Front>
        <div>
          <h1 style={{color: "white"}}>Title</h1>
          <p style={{color: "white"}}>description</p>
        </div>
      </Front>
    </HeadingOverlay>
  ));

