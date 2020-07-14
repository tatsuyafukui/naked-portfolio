import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {InfoTxt} from '../../Atoms/Txt'
import TextTruncate from '../../Atoms/TextTruncate'
import {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import {graphql} from 'gatsby'
import List, {ListItem} from '../../Atoms/List'
import SkillLink from '../../Organisms/SkillLink'

const SceneTemplate = ({data}) => {
  const [isOpen, setIsOpen] = useState(false)
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
            <Breadcrumb
              className={styles.breadcrumb}
              separator={
                <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
              }
            >
              <Link className={styles.link} to='/'>
                <Txt>Home</Txt>
              </Link>
              <Txt>{scene.numberTitle}</Txt>
            </Breadcrumb>
            <div className={styles.titleWrap}>
              <BoldHeading level={1} className={styles.title}>
                {scene.title}
              </BoldHeading>
              {/* PC */}
              <Txt className={styles.descriptionPc}>{scene.description}</Txt>
              {/* SP */}
              <Txt className={styles.descriptionSp}>
                <TextTruncate
                  open={isOpen}
                  truncateText={
                    <button
                      key={'truncateText'}
                      className={styles.button}
                      onClick={() => setIsOpen(true)}
                    >
                      <InfoTxt>続きを読む</InfoTxt>
                    </button>
                  }
                >
                  {scene.description}
                </TextTruncate>
              </Txt>
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
