import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {OutboundLink} from 'gatsby-plugin-google-analytics'
import {containPresenter} from '../../utils/HoC'

const ShareButtonPresenter = ({icon, mediaUrl, className, ...props}) => (
  <OutboundLink
    href={mediaUrl}
    target='_blank'
    rel='noopener noreferrer'
    eventAction={`スキルシェア`}
    eventCategory={'SNSシェアボタン'}
    eventLabel={'SNSシェアボタン'}
    {...props}
  >
    <div
      className={[styles.circle, styles[icon.iconName], className].join(' ')}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  </OutboundLink>
)

ShareButtonPresenter.propTypes = {
  icon: PropTypes.object,
  mediaUrl: PropTypes.string,
  className: PropTypes.string,
}

const ShareButtonFactory = icon => ({
  defaultText = '',
  url = '',
  presenter,
  ...props
}) => {
  const mediaUrl = getShareUrl(icon.iconName, defaultText, url)
  return presenter({icon, mediaUrl, ...props})
}

export const TwitterShareButton = containPresenter(
  ShareButtonFactory(faTwitter),
  ShareButtonPresenter
)
export const FacebookShareButton = containPresenter(
  ShareButtonFactory(faFacebook),
  ShareButtonPresenter
)
export const LinkedinShareButton = containPresenter(
  ShareButtonFactory(faLinkedin),
  ShareButtonPresenter
)

TwitterShareButton.propTypes = {
  defaultText: PropTypes.string,
  url: PropTypes.string.isRequired,
}

FacebookShareButton.propTypes = {
  url: PropTypes.string.isRequired,
}

LinkedinShareButton.propTypes = {
  url: PropTypes.string.isRequired,
}

export const getShareUrl = (media, url, defaultText = '') => {
  switch (media) {
    case faTwitter.iconName:
      return `https://twitter.com/intent/tweet?url=${url}&hashtags=Progate&text=${defaultText}`
    case faFacebook.iconName:
      return `https://www.facebook.com/share.php?u=${url}`
    case faLinkedin.iconName:
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    default:
      break
  }
}
