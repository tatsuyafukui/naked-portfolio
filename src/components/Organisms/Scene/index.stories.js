import React from 'react'
import {storiesOf} from '@storybook/react'
import Scene from './index'
import data from '../../../../__mocks__/data/scene.json'

storiesOf('Organisms/Scene', module).add('Default', () => (
  <Scene scene={data.scenesJson} />
))
