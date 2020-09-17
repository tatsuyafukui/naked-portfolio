import React from 'react'
import {storiesOf} from '@storybook/react'
import SceneIndexTemplate from './index'
import sceneData from '../../../mock/data/scenes.json'

storiesOf('Template/SceneIndexTemplate', module).add('Default', () => (
  <SceneIndexTemplate scenes={sceneData.allScenesJson.nodes} />
))
