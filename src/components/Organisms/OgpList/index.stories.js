import React from 'react'
import {storiesOf} from '@storybook/react'
import OgpList from './index'
import data from '../../../mock/data/recommended.json'

storiesOf('Organisms/OgpList', module).add('Default', () => (
  <OgpList ogpList={data.allRecommendedJson.nodes} style={{maxWidth: '800px'}} />
))
