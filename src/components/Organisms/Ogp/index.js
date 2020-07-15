import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Img from 'gatsby-image'
import Heading from '../../Atoms/Heading'
import OgpDescription, {
  AmazonOgpDescription,
} from '../../Molecules/OgpDescription'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_MD} from '../../../constants'

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
  <Link
    className={[styles.ogp, className].join(' ')}
    to={url}
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  >
    <MediaObjectLayout
      summary={summaryPosition}
      className={styles[summaryPosition]}
      hasImage={!!image}
    >
      <Img fluid={image} alt={title} />
      <div className={[styles.ogBody].join(' ')}>
        <Heading level={5} className={[styles.ogTitle, truncate].join(' ')}>
          {title}
        </Heading>
        {ogpDescription}
      </div>
    </MediaObjectLayout>
  </Link>
)

export const OgpContainer = ({
  description,
  url,
  isbn,
  image,
  twitterCard,
  presenter,
  ...props
}) => {
  const isMobile = useMediaQuery({query: MEDIA_QUERY_MD})
  const truncate = !isMobile ? styles.textTruncate : styles.multilineTextTruncate
  const summaryPosition = image ? getSummaryPosition(twitterCard) : null
  let ogpDescription
  if (isbn) {
    ogpDescription = <AmazonOgpDescription url={url} />
  } else {
    ogpDescription = <OgpDescription description={description} url={url} />
  }

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
  description: PropTypes.node,
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
      return 'right'
  }
}
