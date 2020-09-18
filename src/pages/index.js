import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import IndexTemplate from '../components/Templates/IndexTemplate'

const IndexPage = () => {
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
        }
      }
    }
  `)

  return <IndexTemplate scenes={data.allScenesJson.nodes} />
}

export default IndexPage
