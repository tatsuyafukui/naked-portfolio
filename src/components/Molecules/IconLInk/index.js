import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faAngleRight,
  faAngleLeft,
  faBook,
} from '@fortawesome/free-solid-svg-icons'

const iconLinkFactory = (icon, summary = 'left', role) => ({
  tag: Tag = Link,
  className,
  children,
  ...props
}) => (
  <Tag
    className={[styles.iconLink, className, styles[role]].join(' ')}
    {...props}
  >
    <MediaObjectLayout summary={summary} className={styles.mediaObjectLayout}>
      <span className={styles[summary]}>{children}</span>
      <FontAwesomeIcon icon={icon} />
    </MediaObjectLayout>
  </Tag>
)

export const NavigationLink = iconLinkFactory(faAngleRight)
export const BackLink = iconLinkFactory(faAngleLeft, 'right')
export const TextSkillLink = iconLinkFactory(faBook, 'right')

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
}

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
}

TextSkillLink.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
}
