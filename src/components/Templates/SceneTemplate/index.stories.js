import React from 'react'
import {storiesOf} from '@storybook/react'
import SceneTemplate from './index'
import sceneData from '../../../mock/data/scenes'
import skillsData from '../../../mock/data/skills'
import sceneImage from '../../../mock/images/scene.png'
sceneData[0].image = sceneImage

storiesOf('Template/SceneTemplate', module).add('Default', () => (
  <SceneTemplate scene={sceneData[0]} skills={skillsData} />
))
