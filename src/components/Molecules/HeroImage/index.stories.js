import React from 'react'
import {storiesOf} from '@storybook/react'
import HeroImage from './index'
import Img from 'gatsby-image'
import scene from '../../../mock/data/scene.json'
import skill from '../../../mock/data/skill.json'
import BackgroundImage from 'gatsby-background-image'
import Heading from '../../Atoms/Heading'

storiesOf('Molecules/HeroImage', module)
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
  .add('with background-image', () => (
    <HeroImage>
      <div style={style}>
        <Heading>HeroImage</Heading>
      </div>
    </HeroImage>
  ))
  .add('with gastby-background-image', () => (
    <HeroImage>
      <BackgroundImage
        style={style}
        fluid={skill.skillsJson.thumbnail.childImageSharp.fluid}
      >
        <Heading>HeroImage</Heading>
      </BackgroundImage>
    </HeroImage>
  ))

const style = {
  backgroundImage: `url(${scene.scenesJson.image.publicURL})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
