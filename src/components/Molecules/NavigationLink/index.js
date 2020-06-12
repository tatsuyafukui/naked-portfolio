import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const NavigationLink = ({
  children,
  className,
  ...props
}) => (
  <Link className={[styles.navigationLink, className].join(' ')}
  {...props}>
    <span>{children}</span>
    <FontAwesomeIcon icon={faAngleRight} />
  </Link>
)

export default NavigationLink

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
}
