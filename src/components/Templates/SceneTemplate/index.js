import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Seo from '../../seo'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import LongDescription from '../../Molecules/LongDescription'
import {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'
import {graphql} from 'gatsby'
import HeroImage from '../../Molecules/HeroImage'
import LazyImage from '../../Atoms/LazyImage'
import Main from '../../Atoms/Main'

const SceneTemplate = ({data}) => {
  const scene = data.scenesJson
  const skills = data.scenesJson.skills

  return (
    <div className={styles.background}>
      <Seo title={scene.title} description={scene.description} lang='ja' />
      <Header />
      <Main>
        <section className={styles.firstview}>
          <HeroImage>
            <LazyImage src={scene.image.publicURL} alt={scene.title} />
          </HeroImage>
          <Container>
            <NavigationBreadcrumb>
              <Link to='/'>Home</Link>
              <Link to='/scenes'>シーン一覧</Link>
              <Txt>{scene.numberTitle}</Txt>
            </NavigationBreadcrumb>
            <div className={styles.titleWrap}>
              <BoldHeading level={1} className={styles.title}>
                {scene.title}
              </BoldHeading>
              <LongDescription className={styles.description}>
                {scene.description}
              </LongDescription>
            </div>
          </Container>
        </section>
        <Container>
          <SkillList skills={skills} />
        </Container>
      </Main>
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
