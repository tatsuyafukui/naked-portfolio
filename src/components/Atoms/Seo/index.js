import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'
import removeMarkdown from 'remove-markdown'
import {containPresenter} from '../../utils/HoC'

const SeoPresenter = ({
  lang,
  title,
  siteTitle,
  metaDescription,
  metaImage,
  metaURL,
  meta,
}) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | ${siteTitle}`}
    meta={[
      {
        name: 'description',
        content: metaDescription,
      },
      {
        property: 'og:site_name',
        content: siteTitle,
      },
      {
        property: 'og:title',
        content: `${title} | ${siteTitle}`,
      },
      {
        property: 'og:description',
        content: metaDescription,
      },
      {
        property: 'og:image',
        content: metaImage,
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: metaURL,
      },
      {
        property: 'og:locale',
        content: 'ja_JP',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: `${title} | ${siteTitle}`,
      },
      {
        name: 'twitter:description',
        content: metaDescription,
      },
      {
        name: 'twitter:image',
        content: metaImage,
      },
      {
        name: 'twitter:url',
        content: metaURL,
      },
      {
        name: 'twitter:name',
        content: '@progateJP',
      },
      {
        name: 'twitter:creator',
        content: '@progateJP',
      },
      {
        property: 'fb:app_id',
        content: '296639803850370',
      },
    ].concat(meta)}
  />
)

SeoPresenter.propTypes = {
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  siteTitle: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
  metaImage: PropTypes.string.isRequired,
  metaURL: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
}

export const SeoContainer = ({
  description,
  image,
  slug,
  presenter,
  ...props
}) => {
  const {site, file} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteURL
          }
        }
        file(relativePath: {eq: "ogpDefault.png"}) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description
    ? removeMarkdown(description)
    : site.siteMetadata.description
  const metaImage = image
    ? site.siteMetadata.siteURL + image
    : site.siteMetadata.siteURL + file.publicURL
  const metaURL = slug
    ? site.siteMetadata.siteURL + slug
    : site.siteMetadata.siteURL

  return presenter({
    metaDescription,
    metaImage,
    metaURL,
    siteTitle: site.siteMetadata.title,
    ...props,
  })
}

const Seo = containPresenter(SeoContainer, SeoPresenter)

Seo.defaultProps = {
  lang: 'en',
  meta: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  slug: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
