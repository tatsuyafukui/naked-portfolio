import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillTemplate from './index'
import skillData from '../../../mock/data/skill.json'
import sceneData from '../../../mock/data/scene.json'
import recommended from '../../../mock/data/recommended.json'

storiesOf('Template/SkillTemplate', module).add('Default', () => (
  <SkillTemplate
    scene={sceneData.scenesJson}
    skill={skillData.skillsJson}
    recommended={recommended.allRecommendedJson.nodes}
  />
))
