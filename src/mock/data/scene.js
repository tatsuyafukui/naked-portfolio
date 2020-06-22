import {graphql, useStaticQuery} from 'gatsby'

const data = useStaticQuery(graphql`
  query {
    scenesJson {
      id
      heading
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

export default data
