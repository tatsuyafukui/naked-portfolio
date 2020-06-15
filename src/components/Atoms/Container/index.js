import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Container = ({tag: Tag, className, children, ...props}) => (
  <Tag className={[styles.root, className].join(' ')} {...props}>
    {children}
  </Tag>
)

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

Container.defaultProps = {
  tag: 'div',
}
