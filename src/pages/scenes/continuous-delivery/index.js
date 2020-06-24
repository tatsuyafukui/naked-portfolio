import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SceneTemplate from '../../../components/Templates/SceneTemplate'
import skillsData from '../../../mock/data/skills.json'

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
    }
  `)

  return (
    <SceneTemplate
      scene={data.scenesJson}
      skills={skillsData}
      open={isOpen}
      onClick={() => setIsOpen(true)}
    />
  )
}

export default ContinuousDeliveryPage
