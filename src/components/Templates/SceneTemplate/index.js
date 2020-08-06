import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Seo from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'
import {graphql} from 'gatsby'
import LongDescription from '../../Molecules/LongDescription'

const SceneTemplate = ({data}) => {
  const scene = data.scenesJson
  const skills = data.scenesJson.skills

  return (
    <>
      <Seo title={scene.title} description={scene.description} lang={'ja'} />
      <Header />
      <main>
        <div className={styles.visualContainer}>
          <img
            className={styles.visual}
            src={scene.image.publicURL}
            alt={scene.title}
          />
        </div>
        <Container>
          <div className={styles.firstview}>
            <Breadcrumb className={styles.breadcrumb}>
              <Link className={styles.link} to='/'>
                <Txt>Home</Txt>
              </Link>
              <Txt>{scene.numberTitle}</Txt>
            </Breadcrumb>
            <div className={styles.titleWrap}>
              <BoldHeading level={1} className={styles.title}>
                {scene.title}
              </BoldHeading>
              <div className={styles.description}>
                <LongDescription>{scene.description}</LongDescription>
              </div>
            </div>
          </div>
        </Container>
        <section className={styles.background}>
          <Container>
            <SkillList skills={skills} />
          </Container>
        </section>
      </main>
      <Footer className={styles.footer} />
    </>
  )
}

SceneTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SceneTemplate

export const query = graphql`
  query($slug: String) {
    scenesJson(fields: {slug: {eq: $slug}}) {
      id
      numberTitle
      title
      description
      image {
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
              ...GatsbyImageSharpFluid_withWebp
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
