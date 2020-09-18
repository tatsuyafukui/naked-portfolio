import React from 'react'
import IndexTemplate from '../components/Templates/IndexTemplate'
import {graphql, useStaticQuery} from 'gatsby'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allScenesJson {
        nodes {
          id
          image {
            publicURL
          }
        }
      }
    }
  `)

  return <IndexTemplate scenes={data.allScenesJson.nodes} />
}

export default IndexPage
