import React from 'react'
import {storiesOf} from '@storybook/react'
import Txt, {InfoTxt} from './index'

storiesOf(`Atoms/Txt`, module)
  .add(`Text - XXS`, () => <Txt fontSize={'xxs'}>Show text</Txt>)
  .add(`Text - XS`, () => <Txt fontSize={'xs'}>Show text</Txt>)
  .add(`Text - S`, () => <Txt fontSize={'s'}>Show text</Txt>)
  .add(`Text - M`, () => <Txt>Show text</Txt>)
  .add(`Text - L`, () => <Txt fontSize={'l'}>Show text</Txt>)
  .add(`Text - XL`, () => <Txt fontSize={'xl'}>Show text</Txt>)
  .add(`Text - XXL`, () => <Txt fontSize={'xxl'}>Show text</Txt>)
  .add(`Text - XXXL`, () => <Txt fontSize={'xxxl'}>Show text</Txt>)
  .add(`Info Text`, () => <InfoTxt>Show text</InfoTxt>)
