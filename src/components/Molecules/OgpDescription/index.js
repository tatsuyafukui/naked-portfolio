import React from 'react'
import {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import NavigationLink from '../NavigationLink'
import styles from '../../Molecules/OgpDescription/styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_MD} from '../../../constants'

const OgpDescription = ({url, description}) => {
  const isMobile = useMediaQuery({query: MEDIA_QUERY_MD})

  return (
  <>
    { isMobile ||
      <InfoTxt visualLevel={2} className={styles.truncateText}>
        {description}
      </InfoTxt>
    }
    <div className={styles.ogUrl}>
      <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
      <DisableTxt visualLevel={2} className={styles.truncateText}>
        {url}
      </DisableTxt>
    </div>
  </>
)}

export default OgpDescription

export const AmazonOgpDescription = ({url}) => (
  <InfoTxt visualLevel={2} className={styles.amazonOgpDescription}>
    <NavigationLink tag={'span'} to={url}>
      Amazonで詳細を見る
    </NavigationLink>
  </InfoTxt>
)
