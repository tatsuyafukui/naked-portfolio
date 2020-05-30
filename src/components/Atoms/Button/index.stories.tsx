import { storiesOf } from '@storybook/react';
import Button, {
  PrimaryButton,
  SecondaryButton,
  WarningButton,
  DangerButton,
} from './index';
import React from 'react';

storiesOf(`Atoms/Button`, module)
  .add(`default`, () => <Button>default</Button>)
  .add(`primary`, () => <PrimaryButton>primary</PrimaryButton>)
  .add(`secondary`, () => <SecondaryButton>secondary</SecondaryButton>)
  .add(`warning`, () => <WarningButton>warning</WarningButton>)
  .add(`danger`, () => <DangerButton>danger</DangerButton>);
