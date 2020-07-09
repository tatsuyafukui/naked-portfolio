import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SceneTemplate from '../../../components/Templates/SceneTemplate'

const ContinuousDeliveryPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      scenesJson(id: {eq: "シーン５"}) {
        id
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allSkillsJson(filter: {sceneId: {eq: "シーン５"}}) {
        nodes {
          slug
          title
          id
        }
      }
    }
  `)

  return (
    <SceneTemplate
      scene={data.scenesJson}
      skills={data.allSkillsJson.nodes}
      open={isOpen}
      onClick={() => setIsOpen(true)}
    />
  )
}

export default ContinuousDeliveryPage
