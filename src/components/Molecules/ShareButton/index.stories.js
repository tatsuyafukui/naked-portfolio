import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
} from './index'

storiesOf('Molecules/ShareButton', module)
  .add('Twitter', () => <TwitterShareButton url='journey.prog-8.com' />)
  .add('Facebook', () => <FacebookShareButton url='journey.prog-8.com' />)
  .add('Linkedin', () => <LinkedinShareButton url='journey.prog-8.com' />)
