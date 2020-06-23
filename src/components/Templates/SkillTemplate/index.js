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
import {graphql, useStaticQuery} from "gatsby";

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

  const skill = data.skillsJson;

  return (
    <div>
      <SEO title={skill.title} description={skill.overview} lang={'ja'}/>
      <Header/>
      <main className={styles.main}>
        <div>
          <Container>
            <Breadcrumb
              className={styles.breadcrumb}
              separator={<FontAwesomeIcon icon={faAngleRight}/>}
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
              <Overlay>
                <Front><Heading>{skill.title}</Heading></Front>
                <Back><Img fluid={skill.scene.image.childImageSharp.fluid} /></Back>
              </Overlay>
            </div>

            <div>
              {skill.overview}
            </div>

            <div>
              <Img fluid={skill.image.childImageSharp.fluid} />
            </div>
          </Container>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default SkillTemplate
