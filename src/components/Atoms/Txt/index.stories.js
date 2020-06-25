import React from 'react'
import {storiesOf} from '@storybook/react'
import Txt, {InfoTxt, DisableTxt} from './index'

storiesOf('Atoms/Txt', module)
  .add('Text - VisualLevel 1', () => <Txt>Show text</Txt>)
  .add('Text - VisualLevel 2', () => <Txt visualLevel={2}>Show text</Txt>)
  .add('Text - VisualLevel 3', () => <Txt visualLevel={3}>Show text</Txt>)
  .add('Text - VisualLevel 4', () => <Txt visualLevel={4}>Show text</Txt>)
  .add('Info Text', () => <InfoTxt>Show text</InfoTxt>)
  .add('Disable Text', () => <DisableTxt>Show text</DisableTxt>)
