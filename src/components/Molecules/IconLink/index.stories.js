import React from 'react'
import {storiesOf} from '@storybook/react'
import IconLink from './index'

storiesOf(`Molecules/IconLink`, module)
  .add(`Icon link`, () => <IconLink to='#'>Icon link</IconLink>)
  .add(`Icon link space between`, () => <IconLink to='#' spaceBetween>Icon link</IconLink>)
