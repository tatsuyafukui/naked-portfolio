import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillList from './index'
import skills from '../../../mock/data/skills'

storiesOf('Organisms/SkillList', module).add('Default', () => (
  <SkillList skills={skills} />
))
