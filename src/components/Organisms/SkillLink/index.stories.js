import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from '../../Atoms/Container'
import SkillLink from './index'
import skill from '../../../mock/data/skill.json'

storiesOf('Organisms/SkillLink', module).add('Default', () => (
  <div style={style}>
    <Container>
      <SkillLink skill={skill.skillsJson} />
    </Container>
  </div>
))

const style = {
  height: '100vh',
  background: '#F2F4F7',
  padding: '32px 0',
}
