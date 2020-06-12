import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const IconLink = ({
  children,
  className,
  spaceBetween,
  ...props
}) => (
  <Link className={[styles.iconLink, spaceBetween && styles.between, className].join(' ')}
  {...props}>
    <span>{children}</span>
    <FontAwesomeIcon icon={faAngleRight} />
  </Link>
)

export default IconLink
