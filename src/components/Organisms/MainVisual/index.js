import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import Container from '../../Atoms/Container'
import {useStaticQuery, graphql} from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const MainVisual = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "mainvisual.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.file.childImageSharp.fluid}
      className={styles.mainVisual}
    >
      <Container className={styles.container}>
        <Heading level={1} className={styles.title}>
          目標へ向かう学習を
        </Heading>
        <Txt>あなたが自信をもって目標へ向かうための学習ロードマップ</Txt>
      </Container>
    </BackgroundImage>
  )
}

export default MainVisual

Container.propTypes = {
  className: PropTypes.string,
}
