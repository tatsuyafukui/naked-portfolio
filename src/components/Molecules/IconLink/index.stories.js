import React from 'react'
import {storiesOf} from '@storybook/react'
import {NavigationLink, BackLink, TextSkillLink} from './index'

storiesOf('Molecules/IconLink', module)
  .add('Navigation Link', () => (
    <NavigationLink to='/'>Navigation Link</NavigationLink>
  ))
  .add('Back Link', () => <BackLink to='/'>Back Link</BackLink>)
  .add('Text Skill Link', () => (
    <TextSkillLink to='/'>Text Skill Link</TextSkillLink>
  ))
