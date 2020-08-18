import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const containerFactory = role => ({
  tag: Tag,
  className,
  children,
  ...props
}) => (
  <Tag className={[styles.root, styles[role], className].join(' ')} {...props}>
    {children}
  </Tag>
)

const Container = containerFactory('base')
export const NarrowedContainer = containerFactory('narrow')

Container.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

Container.defaultProps = {
  tag: 'div',
}

NarrowedContainer.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

NarrowedContainer.defaultProps = {
  tag: 'div',
}

export default Container
