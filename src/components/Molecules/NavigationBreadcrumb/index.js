import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Breadcrumb from '../../Atoms/Breadcrumb'

const NavigationBreadcrumb = ({children, className, ...props}) => (
  <Breadcrumb
    className={[styles.breadcrumb, className].join(' ')}
    separator={<FontAwesomeIcon className={styles.icon} icon={faAngleRight} />}
    {...props}
  >
    {children}
  </Breadcrumb>
)

export default NavigationBreadcrumb

NavigationBreadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
