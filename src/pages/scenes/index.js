import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import SceneListTemplate from '../../components/Templates/SceneListTemplate'
import PropTypes from 'prop-types'

const SceneListPage = ({location}) => {
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
          goal
          skills {
            id
            title
          }
        }
      }
    }
  `)

  return (
    <SceneListTemplate scenes={data.allScenesJson.nodes} location={location} />
  )
}

SceneListPage.propTypes = {
  location: PropTypes.object,
}

export default SceneListPage
