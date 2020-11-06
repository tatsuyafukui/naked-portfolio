import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BoldHeading} from '../../Atoms/Heading'
import SkillLink from '../SkillLink'

const SkillList = ({skills}) => (
  <List tag='ol'>
    {skills.map(skill => (
      <ListItem className={styles.listItem} key={skill.id}>
        <BoldHeading tag='span' level={2} visualLevel={4}>
          {skill.subTitle}
        </BoldHeading>
        <SkillLink skill={skill} className={styles.skillLink} />
      </ListItem>
    ))}
  </List>
)

export default SkillList

SkillList.propTypes = {
  skills: PropTypes.array,
}

SkillList.defaultProps = {
  skills: [],
}
