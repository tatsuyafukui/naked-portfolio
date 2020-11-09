import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'
import path from 'path'
import removeMarkdown from 'remove-markdown'

const Seo = ({description, image, lang, href, meta, title}) => {
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
    ? path.join(site.siteMetadata.siteURL, image)
    : path.join(site.siteMetadata.siteURL, file.publicURL)
  const metaURL = href || site.siteMetadata.siteURL

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:site_name',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:title',
          content: `${site.siteMetadata.title} | ${title}`,
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
          content: title,
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
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  href: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
