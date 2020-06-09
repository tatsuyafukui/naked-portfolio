import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index';

storiesOf(`Atoms/Breadcrumb`, module)
.add(`default`, () => (
  <Breadcrumb>
    <a>item 1</a>
    <a>item 3</a>
    <a>item 2</a>
  </Breadcrumb>
))
.add(`１アイテム`, () => (
  <Breadcrumb>
    <a>item 1</a>
  </Breadcrumb>
))
.add(`max Item`, () => (
  <Breadcrumb maxItems={9}>
    <a>item 1</a>
    <a>item 2</a>
    <a>item 3</a>
    <a>item 4</a>
    <a>item 5</a>
    <a>item 6</a>
    <a>item 7</a>
    <a>item 8</a>
    <a>item 9</a>
  </Breadcrumb>
))
.add(`itemsAfterCollapse: 3`, () => (
  <Breadcrumb maxItems={4} itemsAfterCollapse={3}>
    <a>item 1</a>
    <a>item 2</a>
    <a>item 3</a>
    <a>item 4</a>
    <a>item 5</a>
  </Breadcrumb>
))
.add(`itemsBeforeCollapse: 3`, () => (
  <Breadcrumb itemsBeforeCollapse={3}>
    <a>item 1</a>
    <a>item 2</a>
    <a>item 3</a>
    <a>item 4</a>
    <a>item 5</a>
    <a>item 6</a>
    <a>item 7</a>
    <a>item 8</a>
    <a>item 9</a>
  </Breadcrumb>
))
.add(`custom separator`, () => (
  <Breadcrumb separator={'>'}>
    <a>item 1</a>
    <a>item 2</a>
    <a>item 3</a>
  </Breadcrumb>
));