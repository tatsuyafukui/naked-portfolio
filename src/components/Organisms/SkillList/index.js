import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {ListBordered, ListItemBordered} from '../../Atoms/List'
import NavigationLink from '../../Molecules/NavigationLink'

const SkillList = ({skills, ...props}) => (
  <ListBordered {...props}>
    {skills.map(skill => (
      <ListItemBordered>
        <NavigationLink to={skill.link} className={styles.navigationLink}>
          {skill.title}
        </NavigationLink>
      </ListItemBordered>
    ))}
  </ListBordered>
)

export default SkillList

SkillList.propTypes = {
  className: PropTypes.string,
}
