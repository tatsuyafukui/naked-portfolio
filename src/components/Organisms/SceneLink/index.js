import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Heading from '../../Atoms/Heading'
import Img from 'gatsby-image'

const SceneLink = ({scene, className, ...props}) => (
  <Link
    to={scene.fields.slug}
    className={[styles.scene, className].join(' ')}
    {...props}
  >
    <MediaObjectLayout className={styles.layout}>
      <Img
        className={styles.image}
        fluid={scene.image.childImageSharp.fluid}
        alt={scene.title}
      />
      <div className={styles.textWrap}>
        <Heading level={2} visualLevel={3} className={styles.number}>
          {scene.numberTitle}
        </Heading>
        <Heading level={3} visualLevel={2} className={styles.title}>
          {scene.title}
        </Heading>
      </div>
    </MediaObjectLayout>
  </Link>
)

export default SceneLink

SceneLink.propTypes = {
  className: PropTypes.string,
}
