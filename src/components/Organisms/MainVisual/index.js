import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import Container from '../../Atoms/Container'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const MainVisual = className => {
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
  <div className={styles.mainVisual}>
    <Container className={styles.container}>
      <div className={styles.titleWrapper}>
        <Heading level={1} className={styles.title}>目標へ向かう学習を</Heading>
        <Txt className={styles.subTitle}>あなたが自信をもって目標へ向かうための学習ロードマップ</Txt>
      </div>
      <div className={styles.frontImage}>
        <img src="https://placehold.jp/440x293.png" alt="placeholder"/>
      </div>
    </Container>
    <Img fluid={data.file.childImageSharp.fluid} alt='' />
  </div>
)}



export default MainVisual

Container.propTypes = {
  className: PropTypes.string,
}
