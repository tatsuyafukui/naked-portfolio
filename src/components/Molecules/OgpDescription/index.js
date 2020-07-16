import React from 'react'
import {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import NavigationLink from '../NavigationLink'
import styles from '../../Molecules/OgpDescription/styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'

const OgpDescription = ({url, description}) => (
  <>
    {description && (
      <InfoTxt
        visualLevel={2}
        className={[styles.description, styles.truncateText].join(' ')}
      >
        {description}
      </InfoTxt>
    )}
    <div className={styles.ogUrl}>
      <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
      <DisableTxt visualLevel={2} className={styles.ogUrlText}>
        {url}
      </DisableTxt>
    </div>
  </>
)

export default OgpDescription

export const AmazonOgpDescription = ({url}) => (
  <InfoTxt visualLevel={2} className={styles.amazonOgpDescription}>
    <NavigationLink tag={'span'} to={url}>
      Amazonで詳細を見る
    </NavigationLink>
  </InfoTxt>
)
