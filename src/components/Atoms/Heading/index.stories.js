import React from 'react'
import {storiesOf} from '@storybook/react'
import Heading from './index'

storiesOf(`Atoms/Heading`, module)
  .add(`Default`, () => <Heading>Heading</Heading>)
  .add('Level:1', () => <Heading level={1}>HeadingLevel:1</Heading>)
  .add('Level:2', () => <Heading level={2}>HeadingLevel:2</Heading>)
  .add('Level:3', () => <Heading level={3}>HeadingLevel:3</Heading>)
  .add('Level:4', () => <Heading level={4}>HeadingLevel:4</Heading>)
  .add('Level:5', () => <Heading level={5}>HeadingLevel:5</Heading>)
  .add('Level:6', () => <Heading level={6}>HeadingLevel:6</Heading>)
  .add('Level:1, VisualLevel:2', () => (
    <Heading level={1} visualLevel={2}>
      HeadingLevel:1, VisualLevel:2
    </Heading>
  ))
