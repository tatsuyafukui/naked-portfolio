import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Seo from '../../seo'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Container, {NarrowedContainer} from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import {BoldHeading, HighlightedHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import HeroImage from '../../Molecules/HeroImage'
import SkillShareSection from '../../Organisms/SkillShareSection'
import {graphql} from 'gatsby'
import LazyImage from '../../Atoms/LazyImage'
import Main from '../../Atoms/Main'
import SkillGetStarted from '../../Organisms/SkillGetStarted'

const SkillTemplate = ({data, location}) => {
  const skill = data.skillsJson
  const scene = data.skillsJson.scene
  const keyVisual = data.file.publicURL

  return (
    <>
      <Seo
        title={skill.title}
        description={skill.overview}
        image={skill.thumbnail.publicURL}
        href={location.href}
        lang='ja'
      />
      <Header />
      <Main>
        <HeroImage>
          <Container className={styles.heroContainer}>
            <div className={styles.heroTxtWrap}>
              <BoldHeading level={1} className={styles.title}>
                {skill.title}
              </BoldHeading>
              <Txt>{skill.subTitle}</Txt>
            </div>
          </Container>
          <LazyImage
            className={styles.keyVisual}
            src={keyVisual}
            alt={skill.title}
          />
        </HeroImage>
        <Container>
          <NavigationBreadcrumb className={styles.breadcrumb}>
            <Link to='/scenes'>シーン一覧</Link>
            <Link to={scene.fields.slug}>{scene.numberTitle}</Link>
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
          <Txt
            lineHeightLevel={5}
            dangerouslySetInnerHTML={{__html: skill.overview}}
          />
          <LazyImage
            className={styles.image}
            src={skill.image.publicURL}
            alt={skill.title}
          />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            学ぶ目的
          </HighlightedHeading>
          <Txt
            lineHeightLevel={5}
            dangerouslySetInnerHTML={{__html: skill.purpose}}
          />
          <HighlightedHeading
            level={2}
            visualLevel={4}
            className={styles.highlightedHeading}
          >
            ここから学ぼう
          </HighlightedHeading>
          <SkillGetStarted getStarted={skill.getStarted} />
          <SkillShareSection title={skill.title} url={location.href} />
        </NarrowedContainer>
      </Main>
      <Footer />
    </>
  )
}

SkillTemplate.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object,
}

export default SkillTemplate

export const query = graphql`
  query($slug: String) {
    skillsJson(fields: {slug: {eq: $slug}}) {
      id
      overview
      purpose
      title
      subTitle
      description
      thumbnail {
        publicURL
      }
      getStarted {
        easy {
          description
          tasks {
            child
            title
          }
          recommended {
            fields {
              ogp {
                ogTitle
                twitterCard
                ogDescription
                ogImage {
                  extension
                  publicURL
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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
        middle {
          description
          tasks {
            child
            title
          }
          recommended {
            fields {
              ogp {
                ogTitle
                twitterCard
                ogDescription
                ogImage {
                  extension
                  publicURL
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
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
      image {
        publicURL
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
    }
    file(relativePath: {eq: "skills/skill_kv.svg"}) {
      publicURL
    }
  }
`
