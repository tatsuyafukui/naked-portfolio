import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const headingFactory = role => ({
  tag: Tag,
  visualLevel,
  lineHeightLevel,
  className,
  ...props
}) => (
  <Tag
    className={[
      styles.h,
      styles[role],
      styles[`h${visualLevel}`],
      styles[`lineHeightLevel${lineHeightLevel}`],
      className,
    ].join(' ')}
    {...props}
  />
)

const HeadingPresenter = headingFactory('normal')
const BoldHeadingPresenter = headingFactory('bold')
const HighlightedHeadingPresenter = headingFactory('highlight')
const UnderlinedHeadingPresenter = headingFactory('underline')

export const HeadingContainer = ({
  visualLevel,
  lineHeightLevel,
  level,
  className,
  presenter,
  ...props
}) => {
  level = Math.max(1, Math.min(6, level))
  visualLevel = Math.max(
    1,
    Math.min(6, typeof visualLevel !== 'undefined' ? visualLevel : level)
  )
  lineHeightLevel = Math.max(1, Math.min(5, lineHeightLevel))
  const tag = `h${level}`
  return presenter({tag, visualLevel, lineHeightLevel, className, ...props})
}

const Heading = containPresenter(HeadingContainer, HeadingPresenter)
export const BoldHeading = containPresenter(
  HeadingContainer,
  BoldHeadingPresenter
)
export const HighlightedHeading = containPresenter(
  HeadingContainer,
  HighlightedHeadingPresenter
)
export const UnderlinedHeading = containPresenter(
  HeadingContainer,
  UnderlinedHeadingPresenter
)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

Heading.defaultProps = {
  level: 2,
  lineHeightLevel: 2,
}

BoldHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

BoldHeading.defaultProps = {
  level: 2,
  lineHeightLevel: 2,
}

HighlightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

HighlightedHeading.defaultProps = {
  level: 2,
  lineHeightLevel: 2,
}

UnderlinedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
  lineHeightLevel: PropTypes.number,
}

UnderlinedHeading.defaultProps = {
  level: 2,
  lineHeightLevel: 2,
}

export default Heading
