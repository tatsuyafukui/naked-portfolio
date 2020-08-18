import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BoldHeading} from '../../Atoms/Heading'
import {
  TwitterShareButton,
  FacebookShareButton,
} from '../../Molecules/ShareButton'

const SkillShareSection = ({className, ...props}) => (
  <div className={[styles.root, className].join(' ')} {...props}>
    <BoldHeading level={2} visualLevel={5}>
      今日学ぶことをシェアしよう
    </BoldHeading>
    <List className={styles.list}>
      <ListItem className={styles.listItem}>
        <TwitterShareButton />
      </ListItem>
      <ListItem className={styles.listItem}>
        <FacebookShareButton />
      </ListItem>
    </List>
  </div>
)

export default SkillShareSection

SkillShareSection.propTypes = {
  className: PropTypes.string,
}
