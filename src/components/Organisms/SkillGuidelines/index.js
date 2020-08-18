import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'

const SkillGuidelines = ({skill}) => (
  <List className={styles.guidelines}>
    <ListItem className={styles.guidelinesItem}>
      <BoldHeading level={3} visualLevel={5}>
        基礎
      </BoldHeading>
      <List>
        {skill.standard.basic.map(item => (
          <ListItem key={item} className={styles.listItem}>
            <Txt tag='span'>{item}</Txt>
          </ListItem>
        ))}
      </List>
    </ListItem>
    <ListItem className={styles.guidelinesItem}>
      <BoldHeading level={3} visualLevel={5}>
        応用
      </BoldHeading>
      <List>
        {skill.standard.practical.map(item => (
          <ListItem key={item} className={styles.listItem}>
            <Txt tag='span'>{item}</Txt>
          </ListItem>
        ))}
      </List>
    </ListItem>
  </List>
)

export default SkillGuidelines

SkillGuidelines.propTypes = {
  skill: PropTypes.array,
}

SkillGuidelines.defaultProps = {
  skill: [],
}
