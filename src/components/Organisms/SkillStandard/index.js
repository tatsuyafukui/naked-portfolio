import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'

const SkillStandard = ({standard}) => (
  <List className={styles.standard}>
    <ListItem className={styles.standardItem}>
      <BoldHeading level={3} visualLevel={5}>
        基礎
      </BoldHeading>
      <List>
        {standard.basic.map(item => (
          <ListItem key={item} className={styles.listItem}>
            <Txt tag='span'>{item}</Txt>
          </ListItem>
        ))}
      </List>
    </ListItem>
    <ListItem className={styles.standardItem}>
      <BoldHeading level={3} visualLevel={5}>
        応用
      </BoldHeading>
      <List>
        {standard.practical.map(item => (
          <ListItem key={item} className={styles.listItem}>
            <Txt tag='span'>{item}</Txt>
          </ListItem>
        ))}
      </List>
    </ListItem>
  </List>
)

export default SkillStandard

SkillStandard.propTypes = {
  standard: PropTypes.array,
}

SkillStandard.defaultProps = {
  standard: [],
}
