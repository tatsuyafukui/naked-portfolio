import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import {graphql} from 'gatsby'
import List, {ListItem} from '../../Atoms/List'
import SkillLink from '../../Organisms/SkillLink'
import LongDescription from '../../Molecules/LongDescription'

const SceneTemplate = ({data}) => {
  const scene = data.scenesJson
  const skills = data.scenesJson.skills

  return (
    <>
      <SEO title={scene.title} description={scene.description} lang={'ja'} />
      <Header />
      <main>
        <Img
          className={styles.visual}
          fluid={scene.image.childImageSharp.fluid}
          alt={scene.title}
        />
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
            <List tag='ol'>
              {skills.map(skill => (
                <ListItem className={styles.listItem} key={skill.id}>
                  <BoldHeading tag='span' level={2} visualLevel={3}>
                    {skill.subTitle}
                  </BoldHeading>
                  <SkillLink skill={skill} className={styles.skillLink} />
                </ListItem>
              ))}
            </List>
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
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
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
