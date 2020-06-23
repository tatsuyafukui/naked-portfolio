import {graphql, useStaticQuery} from 'gatsby'

const data = useStaticQuery(graphql`
  query {
    scenesJson {
      id
      title
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
    allScenesJson {
      nodes {
        id
        title
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
  }
`)

export default data
