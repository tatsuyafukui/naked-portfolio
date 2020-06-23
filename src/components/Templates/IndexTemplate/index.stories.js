import React from 'react'
import {storiesOf} from '@storybook/react'
import IndexTemplate from './index'
import data from '../../../mock/data/scene'

storiesOf('Template/IndexTemplate', module).add('Default', () => (
  <IndexTemplate scenes={data.allScenesJson.nodes} />
))
