import React from 'react'
import {storiesOf} from '@storybook/react'
import LazyImage from './index'
import scene from '../../../../__mocks__/data/scene.json'

storiesOf('Atoms/LazyImage', module).add('Default', () => (
  <LazyImage src={scene.scenesJson.image.publicURL} />
))
