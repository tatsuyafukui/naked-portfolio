import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Heading from '../../Atoms/Heading'
import {InfoTxt} from '../../Atoms/Txt'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const SceneLink = ({scene, className, ...props}) => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "PCscene_kv.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Link to='/' className={styles.scene}>
      <MediaObjectLayout className={styles.layout}>
        <Img className={styles.image} fluid={data.file.childImageSharp.fluid} alt={scene.heading} />
        <div className={styles.textWrap}>
          <InfoTxt fontSize='xl' className={styles.number}>{scene.heading}</InfoTxt>
          <Heading level={2} className={styles.title}>{scene.heading}</Heading>
        </div>
      </MediaObjectLayout>
    </Link>
)}

export default SceneLink

SceneLink.propTypes = {
  className: PropTypes.string,
}
