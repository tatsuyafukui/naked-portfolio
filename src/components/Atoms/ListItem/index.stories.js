import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem, { ListItemUnderlined } from "./index";

storiesOf(`Atoms/ListItem`, module)
  .add(`ListItem`, () => <ListItem>ListItem</ListItem>)
  .add(`ListItemUenderlined`, () => <ListItemUnderlined>ListItemUnderlined</ListItemUnderlined>)
