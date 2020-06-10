import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { containPresenter } from '../../utils/HoC'

const MediaObjectLayoutPresenter = ({ tag: Tag, summary, children, className }) => (
  <Tag className={[styles.root, styles[summary], className].join(' ')}>
    <div>{children[0]}</div>
    <div className={styles.body}>{children.slice(1)}</div>
  </Tag>
)

export const MediaObjectLayoutContainer = ({ tag, summary, children, className, presenter }) => {
  const SummaryTypes = ['left', 'right', 'top']

  // 不適切なsummaryタイプの場合はデフォルトのleftを指定
  if (SummaryTypes.indexOf(summary) === -1) {
    summary = 'left'
  }

  return presenter({ tag, summary, children, className })
}

const MediaObjectLayout = containPresenter(MediaObjectLayoutContainer, MediaObjectLayoutPresenter)

MediaObjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
  summary: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
}

MediaObjectLayout.defaultProps = {
  tag: 'div',
  summary: 'left',
}

export default MediaObjectLayout
