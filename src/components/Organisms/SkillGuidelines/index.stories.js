import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillGuidelines from './index'
import skillData from '../../../mock/data/skill.json'

storiesOf('Organisms/SkillGuidelines', module).add('Default', () => (
  <SkillGuidelines skill={skillData.skillsJson} />
))
