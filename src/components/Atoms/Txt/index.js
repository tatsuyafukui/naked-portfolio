import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const txtFactory = role => ({
  tag: Tag = 'p',
  fontSize = 'm',
  className,
  ...props
}) => (
  <Tag
    {...props}
    className={[styles[role], styles[fontSize], className].join(' ')}
  />
)

const Txt = txtFactory('base')
export const InfoTxt = txtFactory('info')
export const DisableTxt = txtFactory('disable')

Txt.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  fontSize: PropTypes.string,
}

InfoTxt.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  fontSize: PropTypes.string,
}

DisableTxt.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  fontSize: PropTypes.string,
}

export default Txt
