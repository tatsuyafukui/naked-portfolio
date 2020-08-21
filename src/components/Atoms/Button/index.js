import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const buttonFactory = role => ({tag: Tag, className, children, ...props}) => (
  <Tag
    className={[styles.button, styles[role], className].join(' ')}
    {...props}
  >
    {children}
  </Tag>
)

const Button = buttonFactory('primary')

Button.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {
  tag: 'button',
}

export default Button
