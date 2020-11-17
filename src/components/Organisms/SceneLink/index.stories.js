import React from 'react'
import {storiesOf} from '@storybook/react'
import Container from '../../Atoms/Container'
import SceneLink from './index'
import data from '../../../../__mocks__/data/scene'

storiesOf('Organisms/SceneLink', module).add('Default', () => (
  <div style={style}>
    <Container>
      <SceneLink scene={data.scenesJson} />
    </Container>
  </div>
))

const style = {
  height: '100vh',
  background: '#F2F4F7',
  padding: '32px 0',
}
