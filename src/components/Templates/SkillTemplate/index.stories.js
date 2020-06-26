import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillTemplate from './index'
import data from '../../../mock/data/skill'
console.log(data)
storiesOf('Template/SkillTemplate', module).add('Default', () => (
  <SkillTemplate
    skill={data.skillsJson}
    recommended={data.allRecommendedJson.nodes}
  />
))
