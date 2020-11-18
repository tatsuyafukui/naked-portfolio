import React from 'react'
import {storiesOf} from '@storybook/react'
import TabItem, {TabList} from './index'
import {action} from '@storybook/addon-actions'

storiesOf('Atoms/Tab', module).add('Default', () => (
  <TabList value={0} onClick={action('Tabがクリックされました')}>
    <TabItem>tab 1</TabItem>
    <TabItem>tab 2</TabItem>
    <TabItem>tab 3</TabItem>
  </TabList>
))
