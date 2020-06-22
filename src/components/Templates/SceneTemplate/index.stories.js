import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import SceneTemplate from './index'
import skillsData from '../../../mock/data/skills'
import data from '../../../mock/data/scene'

storiesOf('Template/SceneTemplate', module).add('Default', () => (
  <SceneTemplate
    scene={data.scenesJson}
    skills={skillsData}
    open={false}
    onClick={action('Read more was clicked')}
  />
))
