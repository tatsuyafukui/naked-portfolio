import React from 'react'
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
import Overlay, {Front, Back} from '../../Atoms/Overlay'
import TextTruncate from '../../Atoms/TextTruncate'
import Heading, {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'
import {graphql, useStaticQuery} from 'gatsby'
import List, {ListItem} from '../../Atoms/List'

const SkillTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      skillsJson(id: {eq: "HTML&CSS"}) {
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        overall
        overview
        purpose
        standard {
          basic
          practical
        }
        slug
        scene {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 1140) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
        }
      }
    }
  `)

  const skill = data.skillsJson

  return (
    <div>
      <SEO title={skill.title} description={skill.overview} lang={'ja'} />
      <Header />
      <main className={styles.main}>
        <div>
          <Container>
            <Breadcrumb
              className={styles.breadcrumb}
              separator={<FontAwesomeIcon icon={faAngleRight} />}
            >
              <Link to='/'>
                <Txt>Home</Txt>
              </Link>
              <Link to={skill.scene.slug}>
                <Txt>{skill.scene.id}</Txt>
              </Link>
              <Txt>{skill.title}</Txt>
            </Breadcrumb>
          </Container>
        </div>
        <div>
          <Container className={styles.container}>
            <div>
              <Overlay
                className={styles.visual}
                overlayStyle={{backgroundColor: 'rgba(3, 0, 39, 0.39)'}}
              >
                <Front>
                  <BoldHeading level={1} className={styles.title}>
                    {skill.title}
                  </BoldHeading>
                </Front>
                <Back>
                  <Img fluid={skill.scene.image.childImageSharp.fluid} />
                </Back>
              </Overlay>
            </div>

            <div className={styles.overview}>
              <Txt dangerouslySetInnerHTML={{__html: skill.overview}} />
            </div>

            <div className={styles.image}>
              <Img fluid={skill.image.childImageSharp.fluid} />
            </div>

            <div className={styles.purpose}>
              <BoldHeading level={3}>学ぶ目的</BoldHeading>
              <Txt dangerouslySetInnerHTML={{__html: skill.purpose}} />
            </div>

            <div className={styles.learning}>
              <Heading level={2}>学んでみよう</Heading>
              <div className={styles.standard}>
                <BoldHeading level={3}>学習の目安</BoldHeading>
                <div>
                  <BoldHeading level={4}>基礎</BoldHeading>
                  <List>
                    {skill.standard.basic.map(item => (
                      <ListItem>
                        <Txt>{item}</Txt>
                      </ListItem>
                    ))}
                  </List>
                </div>
                <div>
                  <BoldHeading level={4}>応用</BoldHeading>
                  <List>
                    {skill.standard.practical.map(item => (
                      <ListItem key={item}>
                        <Txt>{item}</Txt>
                      </ListItem>
                    ))}
                  </List>
                </div>
              </div>
            </div>
            <div className={styles.overall}>
              <BoldHeading level={3}>全体像をつかむには</BoldHeading>
              <Txt dangerouslySetInnerHTML={{__html: skill.overall}} />
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SkillTemplate
