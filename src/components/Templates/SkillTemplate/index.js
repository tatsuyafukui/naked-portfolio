import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import Seo from '../../seo'
import NAvigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {BoldHeading, HighlightedHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import List, {ListItem} from '../../Atoms/List'
import OgpList from '../../Organisms/OgpList'
import HeroImage from '../../Molecules/HeroImage'
import {graphql} from 'gatsby'

const SkillTemplate = ({data}) => {
  const skill = data.skillsJson
  const scene = data.skillsJson.scene
  const recommended = data.skillsJson.recommended

  return (
    <>
      <Seo title={skill.title} description={skill.overview} lang={'ja'} />
      <Header />
      <main>
        <HeroImage>
          <div
            className={styles.keyVisual}
            style={{backgroundImage: `url(${skill.keyVisual.publicURL})`}}
          >
            <Container>
              <BoldHeading level={1} className={styles.title}>
                {skill.title}
              </BoldHeading>
              <Txt>{skill.subTitle}</Txt>
            </Container>
          </div>
        </HeroImage>
        <Container>
          <NAvigationBreadcrumb className={styles.breadcrumb}>
            <Link to='/'>
              <Txt>Home</Txt>
            </Link>
            <Link to={scene.fields.slug}>
              <Txt>{scene.numberTitle}</Txt>
            </Link>
            <Txt>{skill.title}</Txt>
          </NAvigationBreadcrumb>
        </Container>
        <Container tag='article' className={styles.container}>
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            概要
          </HighlightedHeading>
          <LongTxt dangerouslySetInnerHTML={{__html: skill.overview}} />
          <Img
            className={styles.image}
            fluid={skill.image.childImageSharp.fluid}
          />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            学ぶ目的
          </HighlightedHeading>
          <LongTxt dangerouslySetInnerHTML={{__html: skill.purpose}} />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            学習の目安
          </HighlightedHeading>
          <List className={styles.guidelines}>
            <ListItem className={styles.guidelinesItem}>
              <BoldHeading level={3} visualLevel={5}>
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
              <BoldHeading level={3} visualLevel={5}>
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
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            全体像をつかむには
          </HighlightedHeading>
          <LongTxt dangerouslySetInnerHTML={{__html: skill.overall}} />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            おすすめの教材
          </HighlightedHeading>
          <OgpList ogpList={recommended} />
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
      subTitle
      keyVisual {
        publicURL
      }
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
          publicURL
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
        title
        description
        isbn
        url
      }
    }
  }
`
