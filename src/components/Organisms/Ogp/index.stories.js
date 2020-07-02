import React from 'react'
import {storiesOf} from '@storybook/react'
import Ogp from './index'
import data from '../../../mock/data/image'

storiesOf('Organisms/Ogp', module)
  .add('Default', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isBook={false}
      twitterCard={'summary'}
      image={data.imageSharp.fluid}
    />
  ))
  .add('Book', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isBook={true}
      image={data.imageSharp.fluid}
    />
  ))
  .add('twitterCard is summary_large_image', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      twitterCard={'summary_large_image'}
      image={data.imageSharp.fluid}
    />
  ))
  .add('twitterCard is summary', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      twitterCard={'summary'}
      image={data.imageSharp.fluid}
    />
  ))
