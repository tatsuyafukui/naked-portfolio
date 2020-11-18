import React from 'react'
import {storiesOf} from '@storybook/react'
import Ogp from './index'
import data from '../../../../__mocks__/data/recommended.json'

storiesOf('Organisms/Ogp', module)
  .add('Default', () => (
    <Ogp
      title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      url='https://prog-8.com'
      twitterCard='summary'
      ogImage={data.summaryOgp.fields.ogp.ogImage}
    />
  ))
  .add('AmazonOgp', () => (
    <Ogp
      title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      url='https://prog-8.com'
      isbn='4822281515'
      ogImage={data.bookOgp.fields.ogp.ogImage}
    />
  ))
  .add('twitterCard is summary_large_image', () => (
    <Ogp
      style={{maxWidth: '620px'}}
      title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      url='https://prog-8.com'
      twitterCard='summary_large_image'
      ogImage={data.largeOgp.fields.ogp.ogImage}
    />
  ))
  .add('OGP without images', () => (
    <Ogp
      style={{maxWidth: '620px'}}
      title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      url='https://prog-8.com'
      twitterCard='summary_large_image'
    />
  ))
  .add('Amazon OGP without images', () => (
    <Ogp
      style={{maxWidth: '620px'}}
      title='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
      url='https://prog-8.com'
      isbn='4822281515'
    />
  ))
