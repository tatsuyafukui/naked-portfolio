import React from 'react'
import {storiesOf} from '@storybook/react'
import {graphql, useStaticQuery} from 'gatsby'
import Container from '../../Atoms/Container'
import SceneLink from './index'

storiesOf('Organisms/SceneLink', module).add('Default', () => (
  <SceneLinkContainer />
))

const SceneLinkContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      scenesJson(id: {eq: "シーン１"}) {
        id
        heading
        description
        slug
        image {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `)

  return (
    <Container>
      <SceneLink scene={data.scenesJson} />
    </Container>
  )
}
