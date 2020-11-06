import React from 'react'
import {storiesOf} from '@storybook/react'
import SceneListTemplate from './index'
import sceneData from '../../../mock/data/scenes.json'

storiesOf('Template/SceneListTemplate', module).add('Default', () => (
  <SceneListTemplate scenes={sceneData.allScenesJson.nodes} />
))
