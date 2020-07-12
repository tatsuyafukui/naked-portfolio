import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import IndexTemplate from '../components/Templates/IndexTemplate'

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
            childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return <IndexTemplate scenes={data.allScenesJson.nodes} />
}

export default IndexPage
