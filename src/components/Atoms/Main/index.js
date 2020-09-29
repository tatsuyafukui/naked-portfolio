import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const mainFactory = role => ({tag: Tag, className, children, ...props}) => (
  <Tag className={[styles.root, styles[role], className].join(' ')} {...props}>
    {children}
  </Tag>
)

const Main = mainFactory('base')

Main.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  className: PropTypes.string,
}

Main.defaultProps = {
  tag: 'main',
}

export default Main
