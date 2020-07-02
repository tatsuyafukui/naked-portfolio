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
    {url}
  </div>
)

export const OgpContentContainer = ({
  description,
  url,
  isBook,
  presenter,
  ...props
}) => {
  if (isBook) {
    description = (
      <NavigationLink className={styles.navigationLink} to={url}>
        Amazonで詳細をみる
      </NavigationLink>
    )
    url = null
  } else {
    url = (
      <div className={styles.ogUrl}>
        <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
        <DisableTxt className={styles.truncateText}>{url}</DisableTxt>
      </div>
    )
  }

  return presenter({description, url, ...props})
}

const OgpContent = containPresenter(OgpContentContainer, OgpContentPresenter)

export default OgpContent

OgpContent.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  url: PropTypes.node,
  isBook: PropTypes.bool,
}

OgpContent.defaultProps = {
  isBook: false,
}
