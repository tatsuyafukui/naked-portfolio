import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const txtFactory = role => ({
  tag: Tag = 'p',
  visualLevel,
  lineHeightLevel,
  className,
  ...props
}) => (
  <Tag
    {...props}
    className={[
      styles.txt,
      styles[role],
      styles[`visualLevel${visualLevel}`],
      styles[`lineHeightLevel${lineHeightLevel}`],
      className,
    ].join(' ')}
  />
)

const TxtPresenter = txtFactory('base')
const InfoTxtPresenter = txtFactory('info')
const DisableTxtPresenter = txtFactory('disable')

export const TxtContainer = ({
  visualLevel,
  lineHeightLevel,
  presenter,
  ...props
}) => {
  visualLevel = Math.max(1, Math.min(4, visualLevel))
  lineHeightLevel = Math.max(1, Math.min(5, lineHeightLevel))
  return presenter({visualLevel, lineHeightLevel, ...props})
}

const Txt = containPresenter(TxtContainer, TxtPresenter)
export const InfoTxt = containPresenter(TxtContainer, InfoTxtPresenter)
export const DisableTxt = containPresenter(TxtContainer, DisableTxtPresenter)

Txt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

Txt.defaultProps = {
  visualLevel: 1,
  lineHeightLevel: 3,
}

InfoTxt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

InfoTxt.defaultProps = {
  visualLevel: 1,
  lineHeightLevel: 3,
}

DisableTxt.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

DisableTxt.defaultProps = {
  visualLevel: 1,
  lineHeightLevel: 3,
}

export default Txt
