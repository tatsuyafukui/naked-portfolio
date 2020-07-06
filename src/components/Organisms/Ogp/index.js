import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Img from 'gatsby-image'
import Heading from '../../Atoms/Heading'
import {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLink} from '@fortawesome/free-solid-svg-icons'
import NavigationLink from '../../Molecules/NavigationLink'

const OgpPresenter = ({url, ogp, className, ...props}) => (
  <Link
    className={[styles.ogp, className].join(' ')}
    to={url}
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  >
    {ogp}
  </Link>
)

export const OgpContainer = ({
  title,
  description,
  url,
  isbn,
  image,
  twitterCard,
  presenter,
  ...props
}) => {
  let ogp

  // ISBNがある場合はAmazon用のOGPを表示
  if (isbn) {
    ogp = <AmazonOgp title={title} image={image} url={url} />
  } else {
    const summaryPosition = getSummaryPosition(twitterCard)
    ogp = (
      <SummaryOgp
        title={title}
        description={description}
        url={url}
        image={image}
        summaryPosition={summaryPosition}
      />
    )
  }

  return presenter({url, ogp, ...props})
}

const Ogp = containPresenter(OgpContainer, OgpPresenter)

export default Ogp

Ogp.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  url: PropTypes.node,
  isbn: PropTypes.string,
  twitterCard: PropTypes.string,
  image: PropTypes.object,
}

export const getSummaryPosition = twitterCard => {
  switch (twitterCard) {
    case 'summary':
      return 'left'
    case 'summary_large_image':
      return 'top'
    default:
      return 'right'
  }
}

const SummaryOgp = ({title, description, url, image, summaryPosition}) => {
  const ogpBody = (
    <div className={[styles.ogBody].join(' ')}>
      <Heading level={5} className={styles.ogTitle}>
        {title}
      </Heading>
      <InfoTxt visualLevel={2} className={styles.truncateText}>
        {description}
      </InfoTxt>
      <div className={styles.ogUrl}>
        <FontAwesomeIcon className={styles.linkIcon} icon={faLink} />
        <DisableTxt className={styles.truncateText}>{url}</DisableTxt>
      </div>
    </div>
  )

  return (
    <>
      {/* OGPの画像がない場合はBodyのみ表示 */}
      {image ? (
        <MediaObjectLayout
          summary={summaryPosition}
          className={styles[summaryPosition]}
        >
          <Img fluid={image} alt={title} />
          {ogpBody}
        </MediaObjectLayout>
      ) : (
        ogpBody
      )}
    </>
  )
}

const AmazonOgp = ({title, url, image}) => {
  const ogpBody = (
    <div className={[styles.ogBody].join(' ')}>
      <Heading level={5} className={styles.ogTitle}>
        {title}
      </Heading>
      <InfoTxt visualLevel={2}>
        <NavigationLink tag={'span'} className={styles.navigationLink} to={url}>
          Amazonで詳細を見る
        </NavigationLink>
      </InfoTxt>
    </div>
  )

  return (
    <>
      {/* OGPの画像がない場合はBodyのみ表示 */}
      {image ? (
        <MediaObjectLayout summary={'right'} className={styles.amazonOgp}>
          <Img fluid={image} alt={title} />
          {ogpBody}
        </MediaObjectLayout>
      ) : (
        ogpBody
      )}
    </>
  )
}
