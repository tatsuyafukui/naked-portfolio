import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import {BoldHeading} from '../../Atoms/Heading'
import Txt, {InfoTxt} from '../../Atoms/Txt'
import LazyImage from '../../Atoms/LazyImage'
import List, {ListItem} from '../../Atoms/List'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFlag} from '@fortawesome/free-solid-svg-icons'

const SceneLink = ({scene, className, ...props}) => (
  <Link
    to={scene.fields.slug}
    className={[styles.scene, className].join(' ')}
    {...props}
  >
    <MediaObjectLayout className={styles.mediaObjectLayout} summary='top'>
      <div className={styles.imageWrap}>
        <LazyImage
          className={styles.image}
          src={scene.image.publicURL}
          alt={scene.title}
          loading='lazy'
        />
        <div className={styles.numberCircle}>
          <Txt visualLevel={4} className={styles.numberTitle}>
            シーン
          </Txt>
          <BoldHeading level={2} visualLevel={4} className={styles.number}>
            {scene.number}
          </BoldHeading>
        </div>
      </div>
      <div className={styles.textWrap}>
        <div>
          <BoldHeading level={3} visualLevel={3} className={styles.title}>
            {scene.title}
          </BoldHeading>
          <List className={styles.skillList}>
            {scene.skills.map(skill => (
              <ListItem className={styles.skillListItem} key={skill.id}>
                {skill.title}
              </ListItem>
            ))}
          </List>
        </div>
        <InfoTxt className={styles.goal}>
          <span>
            <FontAwesomeIcon icon={faFlag} className={styles.icon} />
            ゴール：
          </span>
          <span>{scene.goal}</span>
        </InfoTxt>
      </div>
    </MediaObjectLayout>
  </Link>
)

export default SceneLink

SceneLink.propTypes = {
  scene: PropTypes.object,
  className: PropTypes.string,
}
