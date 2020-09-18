import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SceneListTemplate from '../../components/Templates/SceneListTemplate'

const SceneListPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allScenesJson {
        nodes {
          id
          number
          title
          fields {
            slug
          }
          image {
            publicURL
          }
          goal
          skills {
            id
            title
          }
        }
      }
    }
  `)

  return <SceneListTemplate scenes={data.allScenesJson.nodes} />
}

export default SceneListPage
