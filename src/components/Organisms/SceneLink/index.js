import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Heading from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'

const SceneLink = ({scene, className, ...props}) => (
  <Link
    to={scene.fields.slug}
    className={[styles.scene, className].join(' ')}
    {...props}
  >
    <MediaObjectLayout summary='top'>
      <div className={styles.imageWrap}>
        <img
          className={styles.image}
          src={scene.image.publicURL}
          alt={scene.title}
          loading='lazy'
        />
        <Heading level={2} visualLevel={4} className={styles.number}>
          {scene.numberTitle}
        </Heading>
      </div>
      <div className={styles.textWrap}>
        <Heading level={3} visualLevel={3} className={styles.title}>
          {scene.title}
        </Heading>
        <Txt className={styles.readMore}>続きを読む</Txt>
      </div>
    </MediaObjectLayout>
  </Link>
)

export default SceneLink

SceneLink.propTypes = {
  scene: PropTypes.object,
  className: PropTypes.string,
}
