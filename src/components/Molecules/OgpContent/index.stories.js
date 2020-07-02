import React from 'react'
import {storiesOf} from '@storybook/react'
import OgpContent from './index'

storiesOf('Molecules/OgpContent', module)
  .add('Default', () => (
    <OgpContent
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
    />
  ))
  .add('isBook: true', () => (
    <OgpContent
      title={'Title'}
      description={'description'}
      url={'https://prog-8.com'}
      isBook={true}
    />
  ))
  .add('Truncate text', () => (
    <OgpContent
      title={
        'TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle'
      }
      description={
        'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription'
      }
      url={
        'urlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurlurl'
      }
    />
  ))
