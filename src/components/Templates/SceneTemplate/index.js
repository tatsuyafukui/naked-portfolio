import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Seo from '../../Atoms/Seo'
import Container from '../../Atoms/Container'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'
import {graphql} from 'gatsby'
import Main from '../../Atoms/Main'
import Scene from '../../Organisms/Scene'

const SceneTemplate = ({data, location}) => {
  const scene = data.scenesJson
  const skills = data.scenesJson.skills

  return (
    <div className={styles.background}>
      <Seo
        title={scene.title}
        description={scene.description}
        image={scene.ogImage.publicURL}
        slug={location.pathname}
        lang='ja'
      />
      <Main>
        <Scene scene={scene} />
        <Container>
          <SkillList skills={skills} />
        </Container>
      </Main>
      <Footer />
    </div>
  )
}

SceneTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default SceneTemplate

export const query = graphql`
  query($slug: String) {
    scenesJson(fields: {slug: {eq: $slug}}) {
      test
      id
      numberTitle
      title
      description
      image {
        publicURL
      }
      ogImage {
        publicURL
      }
      skills {
        id
        title
        subTitle
        description
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
