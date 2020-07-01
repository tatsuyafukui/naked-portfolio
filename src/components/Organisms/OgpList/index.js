import React from 'react'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Ogp from '../../Organisms/Ogp'

const OgpList = ({ogpList}) => (
  <div>
    {ogpList.map(item => {
      // ogpがないサイトはリンクのみ
      if (!item.fields) {
        return (
          <div className={styles.marginBottom}>
            <Link to={item.url} target='_blank' rel='noopener noreferrer'>
              {item.url}
            </Link>
          </div>
        )
      }

      return (
        <div key={item.id} className={styles.marginBottom}>
          <Ogp
            title={item.fields.ogp.ogTitle}
            description={item.fields.ogp.ogDescription}
            url={item.url}
            isBook={item.isBook}
            image={item.image.childImageSharp.fluid}
            twitterCard={item.fields.ogp.twitterCard}
          />
        </div>
      )
    })}
  </div>
)
export default OgpList
