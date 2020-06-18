import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const headingFactory = role => ({tag: Tag, visualLevel, className, ...props}) => (
  <Tag
    className={[styles.h, styles[role], styles[`h${visualLevel}`], className].join(' ')}
    {...props}
  />
)

const HeadingPresenter = headingFactory('normal')
const BoldHeadingPresenter = headingFactory('bold')

export const HeadingContainer = ({visualLevel, level, presenter, ...props}) => {
  level = Math.max(1, Math.min(6, level))
  visualLevel = Math.max(
    1,
    Math.min(6, typeof visualLevel !== 'undefined' ? visualLevel : level)
  )
  const tag = `h${level}`
  return presenter({tag, visualLevel, ...props})
}

const Heading = containPresenter(HeadingContainer, HeadingPresenter)
export const BoldHeading = containPresenter(HeadingContainer, BoldHeadingPresenter)

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
}

Heading.defaultProps = {
  level: 2,
}

BoldHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  visualLevel: PropTypes.number,
}

BoldHeading.defaultProps = {
  level: 2,
}

export default Heading
