import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillTemplate from './index'
import skill from '../../../mock/data/skill.json'
import recommended from '../../../mock/data/recommended.json'

storiesOf('Template/SkillTemplate', module).add('Default', () => (
  <SkillTemplate
    skill={skill.skillsJson}
    recommended={recommended.allRecommendedJson.nodes}
  />
))
