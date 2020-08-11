import React from 'react'
import {storiesOf} from '@storybook/react'
import HeroImage from './index'
import data from '../../../mock/data/scene'

storiesOf('Atoms/HeroImage', module).add('Default', () => (
  <HeroImage>
    <img src={data.scenesJson.image.publicURL} alt={data.scenesJson.title} />
  </HeroImage>
))
