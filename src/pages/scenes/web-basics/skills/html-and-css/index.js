import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SkillTemplate from '../../../../../components/Templates/SkillTemplate'

const HtmlAndCssPage = () => {
  const data = useStaticQuery(graphql`
    query {
      scenesJson(id: {eq: "シーン１"}) {
        id
        slug
        image {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      skillsJson(id: {eq: "html-and-css"}) {
        id
        overall
        overview
        purpose
        title
        standard {
          basic
          practical
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      allRecommendedJson(filter: {skillId: {eq: "html-and-css"}}) {
        nodes {
          fields {
            ogp {
              ogTitle
              twitterCard
              ogDescription
              ogImage {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          id
          isbn
          url
        }
      }
    }
  `)

  return (
    <SkillTemplate
      scene={data.scenesJson}
      skill={data.skillsJson}
      recommended={data.allRecommendedJson.nodes}
    />
  )
}

export default HtmlAndCssPage
