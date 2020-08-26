import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styles from './styles.module.scss'
import Seo from '../../seo'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Container, {NarrowedContainer} from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {BoldHeading, HighlightedHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import OgpList from '../../Organisms/OgpList'
import HeroImage from '../../Molecules/HeroImage'
import SkillShareSection from '../../Organisms/SkillShareSection'
import SkillStandard from '../../Organisms/SkillStandard'
import {graphql} from 'gatsby'

const SkillTemplate = ({data}) => {
  const skill = data.skillsJson
  const scene = data.skillsJson.scene
  const recommended = data.skillsJson.recommended
  const keyVisual = data.file.publicURL

  return (
    <>
      <Seo title={skill.title} description={skill.overview} lang={'ja'} />
      <Header />
      <main>
        <HeroImage>
          <div
            className={styles.keyVisual}
            style={{backgroundImage: `url(${keyVisual})`}}
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
          <NavigationBreadcrumb className={styles.breadcrumb}>
            <Link to='/'>
              <Txt>Home</Txt>
            </Link>
            <Link to={scene.fields.slug}>
              <Txt>{scene.numberTitle}</Txt>
            </Link>
            <Txt>{skill.title}</Txt>
          </NavigationBreadcrumb>
        </Container>
        <NarrowedContainer tag='article' className={styles.container}>
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
          <SkillStandard standard={skill.standard} />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            ここから学ぼう
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
          <SkillShareSection />
        </NarrowedContainer>
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
    file(relativePath: {eq: "skills/skill_kv.svg"}) {
      publicURL
    }
  }
`
