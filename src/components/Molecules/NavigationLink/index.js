import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

const NavigationLink = ({tag: Tag = Link, children, className, ...props}) => (
  <Tag className={[styles.navigationLink, className].join(' ')} {...props}>
    <span>{children}</span>
    <FontAwesomeIcon icon={faAngleRight} />
  </Tag>
)

export default NavigationLink

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}
