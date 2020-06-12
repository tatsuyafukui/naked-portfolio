import React from 'react'
import {storiesOf} from '@storybook/react'
import List, {ListBordered, ListItem, ListItemBordered} from './index'

storiesOf('Atoms/List', module)
  .add('Unordered list', () => (
    <List>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add('Ordered list', () => (
    <List tag='ol'>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add('Bordered list', () => (
    <ListBordered>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
    </ListBordered>
  ))
  .add('Bordered, ordered list', () => (
    <ListBordered tag='ol'>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
      <ListItemBordered>Item</ListItemBordered>
    </ListBordered>
  ))
