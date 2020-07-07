import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const MediaObjectLayoutPresenter = ({
  tag: Tag,
  summary,
  role,
  children,
  className,
}) => (
  <Tag className={[styles[role], styles[summary], className].join(' ')}>
    {children}
  </Tag>
)

export const MediaObjectLayoutContainer = ({
  tag,
  summary,
  children,
  className,
  presenter,
  hasImage,
}) => {
  const SummaryTypes = ['left', 'right', 'top']

  // 不適切なsummaryタイプの場合はデフォルトのleftを指定
  if (SummaryTypes.indexOf(summary) === -1) {
    summary = 'left'
  }

  let role = 'mediaObjectLayout'
  if (!hasImage) {
    children = React.Children.toArray(children).slice(1)
    role = 'noImage'
  }

  return presenter({tag, summary, role, children, className})
}

const MediaObjectLayout = containPresenter(
  MediaObjectLayoutContainer,
  MediaObjectLayoutPresenter
)

MediaObjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
  summary: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  hasImage: PropTypes.bool,
}

MediaObjectLayout.defaultProps = {
  tag: 'div',
  summary: 'left',
  hasImage: true,
}

export default MediaObjectLayout
