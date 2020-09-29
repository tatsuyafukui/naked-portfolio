import React from 'react'
import {storiesOf} from '@storybook/react'
import Txt, {InfoTxt, DisableTxt} from './index'

storiesOf('Atoms/Txt', module)
  .add('Text - VisualLevel 1', () => <Txt>Show text</Txt>)
  .add('Text - VisualLevel 2', () => <Txt visualLevel={2}>Show text</Txt>)
  .add('Text - VisualLevel 3', () => <Txt visualLevel={3}>Show text</Txt>)
  .add('Text - VisualLevel 4', () => <Txt visualLevel={4}>Show text</Txt>)
  .add('Text - lineHeightLevel 1', () => (
    <Txt lineHeightLevel={1}>
      {' '}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Txt>
  ))
  .add('Text - lineHeightLevel 2', () => (
    <Txt lineHeightLevel={2}>
      {' '}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Txt>
  ))
  .add('Text - lineHeightLevel 3', () => (
    <Txt>
      {' '}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Txt>
  ))
  .add('Text - lineHeightLevel 4', () => (
    <Txt lineHeightLevel={4}>
      {' '}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Txt>
  ))
  .add('Text - lineHeightLevel 5', () => (
    <Txt lineHeightLevel={5}>
      {' '}
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Txt>
  ))
  .add('Info Text', () => <InfoTxt>Show text</InfoTxt>)
  .add('Disable Text', () => <DisableTxt>Show text</DisableTxt>)
