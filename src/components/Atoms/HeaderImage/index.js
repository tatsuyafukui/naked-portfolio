import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const HeroImage = ({className, children, ...props}) => (
  <div className={[styles.root, className].join(' ')} {...props}>
    {children}
  </div>
)

export default HeroImage

HeroImage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
