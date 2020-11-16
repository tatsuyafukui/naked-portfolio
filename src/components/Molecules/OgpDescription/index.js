import React from 'react'
import PropTypes from 'prop-types'
import {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import {NavigationLink} from '../IconLInk'
import styles from '../../Molecules/OgpDescription/styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'

const OgpDescription = ({domainName, description}) => (
  <>
    {description && (
      <InfoTxt
        visualLevel={2}
        className={[styles.description, styles.truncateText].join(' ')}
      >
        {description}
      </InfoTxt>
    )}
    <DisableTxt visualLevel={2} className={styles.domainName}>
      <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
      <span>{domainName}</span>
    </DisableTxt>
  </>
)

export default OgpDescription

OgpDescription.propTypes = {
  domainName: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export const AmazonOgpDescription = () => (
  <NavigationLink tag={InfoTxt} visualLevel={2}>
    Amazonで詳細を見る
  </NavigationLink>
)
