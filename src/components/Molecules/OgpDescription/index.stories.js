import React from 'react'
import {storiesOf} from '@storybook/react'
import OgpDescription, {AmazonOgpDescription} from './index'

storiesOf('Molecules/OgpDescription', module)
  .add('Default', () => (
    <OgpDescription description={'description'} url={'https://prog-8.com'} />
  ))
  .add('AmazonOgpDescription', () => (
    <AmazonOgpDescription url={'https://prog-8.com'} />
  ))
