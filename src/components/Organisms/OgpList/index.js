import React from 'react'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import Ogp from '../../Organisms/Ogp'
import List, {ListItem} from '../../Atoms/List'

const OgpList = ({ogpList, ...props}) => (
  <List {...props}>
    {ogpList &&
      ogpList.map(item => (
        <ListItem key={item.id} className={styles.marginBottom}>
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
        </ListItem>
      ))}
  </List>
)
export default OgpList
