import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SceneIndexTemplate from '../../components/Templates/SceneIndexTemplate'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allScenesJson {
        nodes {
          id
          numberTitle
          title
          fields {
            slug
          }
          image {
            publicURL
          }
        }
      }
    }
  `)

  return <SceneIndexTemplate scenes={data.allScenesJson.nodes} />
}

export default IndexPage
