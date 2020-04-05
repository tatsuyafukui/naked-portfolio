import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf(`Dashboard/Header`, module).add(`default`, () => (
  <Heading>Hello from Storybook and Gatsby!</Heading>
));
