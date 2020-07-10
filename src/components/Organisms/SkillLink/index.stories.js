import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from '../../Atoms/Container'
import SkillLink from './index'
import data from '../../../mock/data/skill'

storiesOf('Organisms/SkillLink', module).add('Default', () => (
  <div style={style}>
    <Container>
      <SkillLink skill={data.skillsJson} />
    </Container>
  </div>
))

const style = {
  height: '100vh',
  background: '#F2F4F7',
  padding: '32px 0',
}
