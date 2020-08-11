import React from 'react'
import {storiesOf} from '@storybook/react'
import HeroImage from './index'
import Img from 'gatsby-image'
import scene from '../../../mock/data/scene'
import skill from '../../../mock/data/skill.json'

storiesOf('Atoms/HeroImage', module)
  .add('Default', () => (
    <HeroImage>
      <img
        src={scene.scenesJson.image.publicURL}
        alt={scene.scenesJson.title}
      />
    </HeroImage>
  ))
  .add('with gatsby-image', () => (
    <HeroImage>
      <Img
        fluid={skill.skillsJson.thumbnail.childImageSharp.fluid}
        alt={skill.skillsJson.title}
      />
    </HeroImage>
  ))
