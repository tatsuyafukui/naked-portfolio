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
      twitterCard={'summary'}
      image={data.square.fluid}
    />
  ))
  .add('AmazonOgp', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isbn={'4822281515'}
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
  .add('OGP without images', () => (
    <Ogp
      style={{maxWidth: '800px'}}
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      twitterCard={'summary_large_image'}
    />
  ))
  .add('Amazon OGP without images', () => (
    <Ogp
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isbn={'4822281515'}
    />
  ))
