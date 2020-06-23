import {graphql, useStaticQuery} from 'gatsby'

const data = useStaticQuery(graphql`
  query {
    skillsJson(id: {eq: "HTML&CSS"}) {
      title
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      overall
      overview
      purpose
      standard {
        basic
        practical
      }
      slug
      scene {
        id
        image {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slug
      }
    }
  }
`)

export default data
