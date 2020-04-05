import {storiesOf} from "@storybook/react";
import Paper from "./index";
import React from "react";
import {ElevationLevel} from "../../../constants";

storiesOf(`Atoms/Paper`, module)
.add(`default`, () => (
		<Paper style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation0`, () => (
		<Paper style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation1`, () => (
		<Paper elevation={ElevationLevel.one} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation2`, () => (
		<Paper elevation={ElevationLevel.two} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation3`, () => (
		<Paper elevation={ElevationLevel.three} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation4`, () => (
		<Paper elevation={ElevationLevel.fore} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation5`, () => (
		<Paper elevation={ElevationLevel.five} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation6`, () => (
		<Paper elevation={ElevationLevel.six} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation7`, () => (
		<Paper elevation={ElevationLevel.seven} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation8`, () => (
		<Paper elevation={ElevationLevel.eight} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation9`, () => (
		<Paper elevation={ElevationLevel.nine} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`elevation10`, () => (
		<Paper elevation={ElevationLevel.ten} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`square`, () => (
		<Paper square style={{height: '128px', width: '128px', margin: '8px'}}/>
))
.add(`outlined`, () => (
		<Paper variant={'outlined'} elevation={ElevationLevel.ten} style={{height: '128px', width: '128px', margin: '8px'}}/>
))
