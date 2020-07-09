import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import SceneTemplate from './index'
import skillsData from '../../../mock/data/skills'
import sceneData from '../../../mock/data/scene'

storiesOf('Template/SceneTemplate', module).add('Default', () => (
  <SceneTemplate
    scene={sceneData.scenesJson}
    skills={skillsData.allSkillsJson.nodes.slice(0, 5)}
    open={false}
    onClick={action('Read more was clicked')}
  />
))
