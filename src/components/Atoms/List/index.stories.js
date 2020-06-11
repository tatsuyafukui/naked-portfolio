import React from "react";
import { storiesOf } from "@storybook/react";
import List, { ListBordered } from "./index";
// import List from "./index";
import ListItem from "../ListItem";

storiesOf(`Atoms/List`, module)
  .add(`Unordered list`, () => (
    <List>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add(`Ordered list`, () => (
    <List elementType='ol'>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add(`Bordered list`, () => (
    <ListBordered>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </ListBordered>
  ))
  .add(`Bordered, ordered list`, () => (
    <ListBordered elementType='ol'>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </ListBordered>
  ))
