import {storiesOf} from "@storybook/react";
import Button from "./index";
import {Level} from "../../../constants";
import React from "react";

storiesOf(`Atoms/Button`, module)
.add(`default`, () => (
		<Button>見出し</Button>
))
