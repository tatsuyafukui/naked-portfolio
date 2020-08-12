import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Breadcrumb from '../../Atoms/Breadcrumb'

const NavigationBreadcrumb = ({children, className, ...props}) => (
  <Breadcrumb className={[styles.breadcrumb, className].join(' ')} {...props}>
    {children}
  </Breadcrumb>
)

export default NavigationBreadcrumb

NavigationBreadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
