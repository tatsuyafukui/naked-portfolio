import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {ListBordered, ListItemBordered} from '../../Atoms/List'
import NavigationLink from '../../Molecules/NavigationLink'

const SkillList = ({skills, ...props}) => (
  <ListBordered {...props}>
    {skills.map(skill => (
      <ListItemBordered key={skill.id}>
        <NavigationLink
          to={skill.fields.slug}
          className={styles.navigationLink}
        >
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
