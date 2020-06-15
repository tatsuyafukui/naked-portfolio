import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Wrapper = ({tag: Tag, className, children, ...props}) => (
  <Tag className={[styles.root, className].join(' ')}>
    {children}
  </Tag>
)

export default Wrapper

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

Wrapper.defaultProps = {
  tag: 'div',
}
