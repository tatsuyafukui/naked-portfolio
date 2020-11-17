import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BackLink, TextSkillLink} from '../../Molecules/IconLink'

const SkillSideMenu = ({scene, className, ...props}) => (
  <List className={[styles.root, className].join(' ')} {...props}>
    <ListItem className={styles.listItem}>
      <BackLink to={scene.fields.slug}>{scene.title}</BackLink>
    </ListItem>
    {scene.skills.map(skill => (
      <ListItem className={styles.listItem} key={skill.id}>
        <TextSkillLink to={skill.fields.slug}>{skill.title}</TextSkillLink>
      </ListItem>
    ))}
  </List>
)

export default SkillSideMenu

SkillSideMenu.propTypes = {
  scene: PropTypes.object,
  className: PropTypes.string,
}
