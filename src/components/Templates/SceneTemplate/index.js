import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Seo from '../../seo'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'
import {graphql} from 'gatsby'
import HeroImage from '../../Molecules/HeroImage'
import LazyImage from '../../Atoms/LazyImage'

const SceneTemplate = ({data}) => {
  const scene = data.scenesJson
  const skills = data.scenesJson.skills

  return (
    <div className={styles.background}>
      <Seo title={scene.title} description={scene.description} lang='ja' />
      <Header />
      <main className={styles.main}>
        <section className={styles.firstview}>
          <HeroImage>
            <LazyImage src={scene.image.publicURL} alt={scene.title} />
          </HeroImage>
          <Container>
            <NavigationBreadcrumb>
              <Link to='/'>Home</Link>
              <Txt>{scene.numberTitle}</Txt>
            </NavigationBreadcrumb>
            <div className={styles.titleWrap}>
              <BoldHeading level={1} className={styles.title}>
                {scene.title}
              </BoldHeading>
              <div className={styles.description}>
                <LongTxt
                  dangerouslySetInnerHTML={{__html: scene.description}}
                />
              </div>
            </div>
          </Container>
        </section>
        <Container>
          <SkillList skills={skills} />
        </Container>
      </main>
      <Footer className={styles.footer} />
    </div>
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
