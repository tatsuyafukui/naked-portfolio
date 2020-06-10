import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import IndexTemplate from '../components/Templates/IndexTemplate'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allScenesJson {
        nodes {
          id
          heading
          image {
            childImageSharp {
              fixed(height: 294) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return <IndexTemplate topImage={data.mainImage.childImageSharp.fixed} scenes={data.allScenesJson.nodes} />
}

export default IndexPage
