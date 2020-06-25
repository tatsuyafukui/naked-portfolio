import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const txtFactory = role => ({
  tag: Tag = 'p',
  visualLevel,
  className,
  ...props
}) => (
  <Tag
    {...props}
    className={[
      styles.txt,
      styles[role],
      styles[`visualLevel${visualLevel}`],
      className,
    ].join(' ')}
  />
)

const TxtPresenter = txtFactory('base')
const InfoTxtPresenter = txtFactory('info')
const DisableTxtPresenter = txtFactory('disable')

export const TxtContainer = ({visualLevel, presenter, ...props}) => {
  visualLevel = Math.max(1, Math.min(4, visualLevel))
  return presenter({visualLevel, ...props})
}

const Txt = containPresenter(TxtContainer, TxtPresenter)
export const InfoTxt = containPresenter(TxtContainer, InfoTxtPresenter)
export const DisableTxt = containPresenter(TxtContainer, DisableTxtPresenter)

Txt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
}

Txt.defaultProps = {
  visualLevel: 1,
}

InfoTxt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
}

InfoTxt.defaultProps = {
  visualLevel: 1,
}

DisableTxt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
}

DisableTxt.defaultProps = {
  visualLevel: 1,
}

export default Txt
