import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillSideMenu from './index'
import scene from '../../../../__mocks__/data/scene.json'

storiesOf('Organisms/SkillSideMenu', module).add('Default', () => (
  <SkillSideMenu scene={scene.scenesJson} />
))
