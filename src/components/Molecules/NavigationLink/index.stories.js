import React from 'react'
import {storiesOf} from '@storybook/react'
import NavigationLink from './index'

storiesOf('Molecules/NavigationLink', module)
  .add('Navigation link', () => <NavigationLink to='#'>Navigation link</NavigationLink>)
