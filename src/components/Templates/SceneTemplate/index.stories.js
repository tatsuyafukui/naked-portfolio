import React from 'react'
import {storiesOf} from '@storybook/react'
import SceneTemplate from './index'
import sceneData from '../../../mock/data/scene.json'

storiesOf('Template/SceneTemplate', module).add('Default', () => (
  <SceneTemplate data={sceneData} />
))
