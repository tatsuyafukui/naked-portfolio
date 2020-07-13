import React from 'react'
import {storiesOf} from '@storybook/react'
import IndexTemplate from './index'
import sceneData from '../../../mock/data/scenes.json'

storiesOf('Template/IndexTemplate', module).add('Default', () => (
  <IndexTemplate scenes={sceneData.allScenesJson.nodes} />
))
