import React from "react";
import { storiesOf } from "@storybook/react";
import ListItem, { ListItemBordered } from "./index";

storiesOf(`Atoms/ListItem`, module)
  .add(`ListItem`, () => <ListItem>ListItem</ListItem>)
  .add(`Bordered ListItem`, () => <ListItemBordered>Bordered ListItem</ListItemBordered>)
