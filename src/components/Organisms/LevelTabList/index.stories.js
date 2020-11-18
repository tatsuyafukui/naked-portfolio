import React from 'react'
import {storiesOf} from '@storybook/react'
import LevelTabList from './index'
import {action} from '@storybook/addon-actions'

storiesOf('Organisms/LevelTabList', module).add('Default', () => (
  <LevelTabList value={'easy'} onClick={action('Tabがクリックされました')} />
))
