import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import Heading, {BoldHeading} from '../../Atoms/Heading'
import {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import {containPresenter} from '../../utils/HoC'
import NavigationLink from '../NavigationLink'

const OgpContentPresenter = ({
  title,
  description,
  url,
  ogUrlClass,
  className,
  ...props
}) => (
  <div className={[styles.ogContent, className].join(' ')} {...props}>
    <Heading level={5} className={styles.ogTitle}>
      {title}
    </Heading>
    <InfoTxt visualLevel={2} className={styles.truncateText}>
      {description}
    </InfoTxt>
    <div className={ogUrlClass}>
      <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
      <DisableTxt className={styles.truncateText}>{url}</DisableTxt>
    </div>
  </div>
)

export const OgpContentContainer = ({
  description,
  url,
  isBook,
  presenter,
  ...props
}) => {
  let ogUrlClass = styles.ogUrl

  // TODO: add test
  if (isBook) {
    description = (
      <NavigationLink className={styles.navigationLink} to={url}>
        Amazonで詳細をみる
      </NavigationLink>
    )
    ogUrlClass = styles.hidden
  }

  return presenter({description, url, ogUrlClass, ...props})
}

const OgpContent = containPresenter(OgpContentContainer, OgpContentPresenter)

export default OgpContent

OgpContent.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  url: PropTypes.node,
}

OgpContent.defaultProps = {
  isBook: false,
}
