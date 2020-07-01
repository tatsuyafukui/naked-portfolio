import {graphql, useStaticQuery} from 'gatsby'

const data = useStaticQuery(graphql`
  query {
    imageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`)

export default data
