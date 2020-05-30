import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';
import { Level } from '../../../constants';

storiesOf(`Atoms/Heading`, module)
  .add(`default`, () => <Heading>見出し</Heading>)
  .add('レベル１', () => <Heading level={Level.h1}>見出しレベル１</Heading>)
  .add('レベル１、見た目２', () => (
    <Heading level={Level.h1} visualLevel={Level.h2}>
      見出しレベル１、ビジュアル２
    </Heading>
  ));
