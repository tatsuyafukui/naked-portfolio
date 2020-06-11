import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './index';

storiesOf(`Atoms/Breadcrumb`, module)
.add(`Default`, () => (
  <Breadcrumb>
    <a>item 1</a>
    <a>item 3</a>
    <a>item 2</a>
  </Breadcrumb>
))
.add(`1 item`, () => (
  <Breadcrumb>
    <a>item 1</a>
  </Breadcrumb>
))
.add(`Custom separator: >`, () => (
  <Breadcrumb separator={'>'}>
    <a>item 1</a>
    <a>item 2</a>
    <a>item 3</a>
  </Breadcrumb>
));