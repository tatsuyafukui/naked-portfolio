import React from 'react'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Ogp from '../../Organisms/Ogp'

const OgpList = ({ogpList, ...props}) => (
  <div {...props}>
    {ogpList.map(item => (
      <div key={item.id} className={styles.marginBottom}>
        {/* ogpがないサイトはリンクのみ */}
        {item.fields ? (
          <Ogp
            title={item.fields.ogp.ogTitle}
            description={item.fields.ogp.ogDescription}
            url={item.url}
            isbn={item.isbn}
            image={
              item.fields.ogp.ogImage &&
              item.fields.ogp.ogImage.childImageSharp.fluid
            }
            twitterCard={item.fields.ogp.twitterCard}
          />
        ) : (
          <Link to={item.url} target='_blank' rel='noopener noreferrer'>
            {item.url}
          </Link>
        )}
      </div>
    ))}
  </div>
)
export default OgpList
