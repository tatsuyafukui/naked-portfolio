import React from 'react'
import {storiesOf} from '@storybook/react'
import Ogp from './index'
import data from '../../../mock/data/gatsby-img.json'

storiesOf('Organisms/Ogp', module)
  .add('Default', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isBook={false}
      twitterCard={'summary'}
      image={data.square.fluid}
    />
  ))
  .add('Book', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isBook={true}
      image={data.book.fluid}
    />
  ))
  .add('twitterCard is summary_large_image', () => (
    <Ogp
      style={{maxWidth: '800px'}}
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      twitterCard={'summary_large_image'}
      image={data.summaryLarge.fluid}
    />
  ))
  .add('twitterCard is summary', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      twitterCard={'summary'}
      image={data.square.fluid}
    />
  ))
