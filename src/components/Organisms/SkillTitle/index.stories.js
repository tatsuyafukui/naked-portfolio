import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillTitle from './index'
import skill from '../../../../__mocks__/data/skill.json'

storiesOf('Organisms/SkillTitle', module).add('Default', () => (
  <SkillTitle skill={skill.skillsJson} />
))
