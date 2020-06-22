import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from '../../Atoms/Container'
import SceneLink from './index'
import data from '../../../mock/data/scene'

storiesOf('Organisms/SceneLink', module).add('Default', () => (
  <Container>
    <SceneLink scene={data.scenesJson} />
  </Container>
))
