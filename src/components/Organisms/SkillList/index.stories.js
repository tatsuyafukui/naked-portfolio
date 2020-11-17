import React from 'react'
import {storiesOf} from '@storybook/react'
import SkillList from './index'
import sceneData from '../../../../__mocks__/data/scene.json'

storiesOf('Organisms/SkillList', module).add('Default', () => (
  <SkillList skills={sceneData.scenesJson.skills} />
))
