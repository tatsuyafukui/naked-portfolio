import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillList from './index'
import skills from '../../../mock/data/skills.json'

storiesOf('Organisms/SkillList', module).add('Default', () => (
  <SkillList skills={skills.allSkillsJson.nodes.slice(0, 5)} />
))
