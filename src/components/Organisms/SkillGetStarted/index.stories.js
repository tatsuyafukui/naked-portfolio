import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillGetStarted from './index'
import skillData from '../../../../__mocks__/data/skill.json'
import {NarrowedContainer} from '../../Atoms/Container'

storiesOf('Organisms/SkillGetStarted', module).add('Default', () => (
  <NarrowedContainer>
    <SkillGetStarted getStarted={skillData.skillsJson.overall} />
  </NarrowedContainer>
))
