import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import Seo from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import Overlay, {Front, Back} from '../../Atoms/Overlay'
import Heading, {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import List, {ListItem} from '../../Atoms/List'
import OgpList from '../../Organisms/OgpList'
import {graphql} from 'gatsby'

const SkillTemplate = ({data}) => {
  const skill = data.skillsJson
  const scene = data.skillsJson.scene
  const recommended = data.skillsJson.recommended

  return (
    <>
      <Seo title={skill.title} description={skill.overview} lang={'ja'} />
      <Header />
      <main className={styles.main}>
        <Container>
          <Breadcrumb className={styles.breadcrumb}>
            <Link to='/'>
              <Txt>Home</Txt>
            </Link>
            <Link to={scene.fields.slug}>
              <Txt>{scene.numberTitle}</Txt>
            </Link>
            <Txt>{skill.title}</Txt>
          </Breadcrumb>
        </Container>
        <Container tag='article' className={styles.container}>
          <Overlay
            className={[styles.visual, styles.content].join(' ')}
            overlayStyle={{backgroundColor: 'rgba(3, 0, 39, 0.39)'}}
          >
            <Front>
              <BoldHeading level={1} className={styles.title}>
                {skill.title}
              </BoldHeading>
            </Front>
            <Back>
              <Img fluid={scene.image.childImageSharp.fluid} />
            </Back>
          </Overlay>
          <section className={styles.mainSection}>
            <section className={styles.section}>
              <section className={styles.block}>
                <Txt
                  className={styles.content}
                  dangerouslySetInnerHTML={{__html: skill.overview}}
                />
                <Img
                  className={[styles.image, styles.content].join(' ')}
                  fluid={skill.image.childImageSharp.fluid}
                />
              </section>
              <section className={styles.block}>
                <BoldHeading
                  level={2}
                  visualLevel={3}
                  className={styles.heading3}
                >
                  学ぶ目的
                </BoldHeading>
                <Txt
                  dangerouslySetInnerHTML={{__html: skill.purpose}}
                  className={styles.content}
                />
              </section>
            </section>
            <section className={styles.section}>
              <Heading level={2} className={styles.heading2}>
                学んでみよう
              </Heading>
              <section className={styles.block}>
                <BoldHeading level={3} className={styles.heading3}>
                  学習の目安
                </BoldHeading>
                <List className={styles.guidelines}>
                  <ListItem className={styles.guidelinesItem}>
                    <BoldHeading level={4} className={styles.heading4}>
                      基礎
                    </BoldHeading>
                    <List>
                      {skill.standard.basic.map(item => (
                        <ListItem key={item} className={styles.listItem}>
                          <Txt tag='span'>{item}</Txt>
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                  <ListItem className={styles.guidelinesItem}>
                    <BoldHeading level={4} className={styles.heading4}>
                      応用
                    </BoldHeading>
                    <List>
                      {skill.standard.practical.map(item => (
                        <ListItem key={item} className={styles.listItem}>
                          <Txt tag='span'>{item}</Txt>
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                </List>
              </section>
              <section className={styles.section}>
                <BoldHeading level={3} className={styles.heading3}>
                  全体像をつかむには
                </BoldHeading>
                <Txt
                  dangerouslySetInnerHTML={{__html: skill.overall}}
                  className={styles.content}
                />
              </section>
              <OgpList ogpList={recommended} />
            </section>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  )
}

SkillTemplate.propTypes = {
  data: PropTypes.object,
}

export default SkillTemplate

export const query = graphql`
  query($slug: String) {
    skillsJson(fields: {slug: {eq: $slug}}) {
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
      scene {
        id
        numberTitle
        fields {
          slug
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1140) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      recommended {
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
`
