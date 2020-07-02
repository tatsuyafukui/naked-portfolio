import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'
import OgpContent from '../../Molecules/OgpContent'
import Link from '../../Atoms/Link'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Img from 'gatsby-image'

const OgpPresenter = ({url, ogContent, className, ...props}) => (
  <Link
    className={[styles.ogp, className].join(' ')}
    to={url}
    target='_blank'
    rel='noopener noreferrer'
    {...props}
  >
    {ogContent}
  </Link>
)

export const OgpContainer = ({
  title,
  description,
  url,
  isBook,
  image,
  twitterCard,
  presenter,
  ...props
}) => {
  const summary = getSummary(twitterCard)

  let ogContent = (
    <OgpContent
      title={title}
      description={description}
      url={url}
      isBook={isBook}
    />
  )

  // ogpImageがある場合はMediaObjectLayoutで画像を表示
  if (image) {
    ogContent = (
      <MediaObjectLayout summary={summary} className={styles[summary]}>
        <Img fluid={image} alt={title} />
        {ogContent}
      </MediaObjectLayout>
    )
  }

  return presenter({url, ogContent, ...props})
}

const Ogp = containPresenter(OgpContainer, OgpPresenter)

export default Ogp

Ogp.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  url: PropTypes.node,
  isBook: PropTypes.bool,
  twitterCard: PropTypes.string,
  image: PropTypes.object,
}

Ogp.defaultProps = {
  isBook: false,
}

export const getSummary = twitterCard => {
  switch (twitterCard) {
    case 'summary_large_image':
      return 'top'
    case 'summary':
      return 'left'
    default:
      return 'right'
  }
}
