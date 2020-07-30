import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Img from 'gatsby-image'
import Heading from '../../Atoms/Heading'
import OgpDescription, {
  AmazonOgpDescription,
} from '../../Molecules/OgpDescription'
import {OutboundLink} from 'gatsby-plugin-google-analytics'

const OgpPresenter = ({
  truncate,
  title,
  url,
  image,
  summaryPosition,
  ogpDescription,
  className,
  ...props
}) => (
  <OutboundLink
    className={[styles.ogp, className].join(' ')}
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    eventAction={`${title} - おすすめ教材リンク`}
    eventCategory={'スキル詳細ページ'}
    eventLabel={title}
    {...props}
  >
    <MediaObjectLayout
      summary={summaryPosition}
      className={styles[summaryPosition]}
      hasImage={!!image}
    >
      <Img fluid={image} alt={title} className={styles.image} />
      <div className={[styles.ogBody].join(' ')}>
        <Heading level={5} className={[styles.ogTitle, truncate].join(' ')}>
          {title}
        </Heading>
        {ogpDescription}
      </div>
    </MediaObjectLayout>
  </OutboundLink>
)

OgpPresenter.propTypes = {
  truncate: PropTypes.string,
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  image: PropTypes.object,
  summaryPosition: PropTypes.string,
  ogpDescription: PropTypes.node,
  className: PropTypes.string,
}

export const OgpContainer = ({
  isMobile,
  description,
  url,
  isbn: isAmazon,
  image,
  twitterCard,
  presenter,
  ...props
}) => {
  const domainName = new URL(url).hostname
  const summaryPosition = isAmazon ? 'right' : getSummaryPosition(twitterCard)
  const truncate =
    isMobile || isAmazon ? styles.multilineTextTruncate : styles.textTruncate
  const ogpDescription = isAmazon ? (
    <AmazonOgpDescription />
  ) : (
    <OgpDescription
      description={!isMobile && description}
      domainName={domainName}
    />
  )

  return presenter({
    truncate,
    url,
    image,
    summaryPosition,
    ogpDescription,
    ...props,
  })
}

const Ogp = containPresenter(OgpContainer, OgpPresenter)

export default Ogp

Ogp.propTypes = {
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
  url: PropTypes.node.isRequired,
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
      return 'left'
  }
}