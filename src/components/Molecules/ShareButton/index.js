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
import {useStaticQuery, graphql} from 'gatsby'

const ShareButtonFactory = icon => ({
  url,
  title,
  eventAction = 'SNSシェア',
  className,
  ...props
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const mediaUrl = getShareUrl(
    icon.iconName,
    url,
    title,
    data.site.siteMetadata.title
  )

  return (
    <OutboundLink
      href={mediaUrl}
      target='_blank'
      rel='noopener noreferrer'
      eventAction={eventAction}
      eventCategory={`${icon.iconName}シェアボタン`}
      eventLabel='SNSシェアボタン'
      className={[styles.circle, styles[icon.iconName], className].join(' ')}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </OutboundLink>
  )
}

export const TwitterShareButton = ShareButtonFactory(faTwitter)
export const FacebookShareButton = ShareButtonFactory(faFacebook)
export const LinkedinShareButton = ShareButtonFactory(faLinkedin)

TwitterShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  eventAction: PropTypes.string,
}

FacebookShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  eventAction: PropTypes.string,
}

LinkedinShareButton.propTypes = {
  url: PropTypes.string.isRequired,
  eventAction: PropTypes.string,
}

export const getShareUrl = (media, url, skillTitle, siteTitle) => {
  const [encodedSkillTitle, encodedSiteTitle] = [
    encodeURIComponent(skillTitle),
    encodeURIComponent(siteTitle),
  ]

  switch (media) {
    case faTwitter.iconName:
      return `https://twitter.com/intent/tweet?url=${url}&hashtags=Progate,progate_journey&text=${encodedSkillTitle}%20%7C%20${encodedSiteTitle}`
    case faFacebook.iconName:
      return `https://www.facebook.com/share.php?u=${url}`
    case faLinkedin.iconName:
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    default:
      break
  }
}
