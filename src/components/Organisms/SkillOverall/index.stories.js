import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillOverall from './index'
import skillData from '../../../mock/data/skill.json'
import {NarrowedContainer} from '../../Atoms/Container'

storiesOf('Organisms/SkillOverall', module).add('Default', () => (
  <NarrowedContainer>
    <SkillOverall overall={skillData.skillsJson.overall} />
  </NarrowedContainer>
))
