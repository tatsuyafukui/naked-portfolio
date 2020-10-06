import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillOverall from './index'
import skillData from '../../../mock/data/skill.json'

storiesOf('Organisms/SkillOverall', module).add('Default', () => (
  <SkillOverall overall={skillData.skillsJson.overall} />
))
