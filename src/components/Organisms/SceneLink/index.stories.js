import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from '../../Atoms/Container'
import SceneLink from './index'


storiesOf('Organisms/SceneLink', module).add('Default', () => (
  <Container>
    <SceneLink />
  </Container>
))
