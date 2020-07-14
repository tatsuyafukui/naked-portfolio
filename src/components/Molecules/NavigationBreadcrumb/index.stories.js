import React from 'react'
import {storiesOf} from '@storybook/react'
import NavigationBreadcrumb from './index'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'

storiesOf('Molecules/NavigationBreadcrumb', module).add('Default', () => (
  <NavigationBreadcrumb>
    <Link to='/'>
      <Txt>Home</Txt>
    </Link>
    <Link to='/scenes'>
      <Txt>Scene</Txt>
    </Link>
    <Txt>Skill</Txt>
  </NavigationBreadcrumb>
))
