import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillStandard from './index'
import skillData from '../../../mock/data/skill.json'

storiesOf('Organisms/SkillStandard', module).add('Default', () => (
  <SkillStandard standard={skillData.skillsJson.standard} />
))
