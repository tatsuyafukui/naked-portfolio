import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillTemplate from './index'
import skillData from '../../../mock/data/skill.json'

storiesOf('Template/SkillTemplate', module).add('Default', () => (
  <SkillTemplate data={skillData} />
))
