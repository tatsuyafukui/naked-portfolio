import React from 'react'
import {storiesOf} from '@storybook/react'
import Link, {ColoredLink} from './index'

storiesOf('Atoms/Link', module)
  .add('Internal link', () => <Link to={'/'}>Link</Link>)
  .add('External link', () => <Link to={'https://prog-8.com'}>Link</Link>)
  .add('Colored link', () => <ColoredLink to={'/'}>ColoredLink</ColoredLink>)
