import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import List, {ListItem} from '../../Atoms/List'
import {BackLink, TextSkillLink} from '../../Molecules/IconLink'

const SkillSideMenu = ({scene, className, ...props}) => (
  <List className={[styles.root, className].join(' ')} {...props}>
    <ListItem>
      <BackLink to={scene.fields.slug} className={styles.listItemLink}>
        {scene.title}
      </BackLink>
    </ListItem>
    {scene.skills.map(skill => (
      <ListItem className={styles.listItem} key={skill.id}>
        <TextSkillLink
          to={skill.fields.slug}
          className={styles.listItemLink}
          activeClassName='styles-module--active--56lYK'
        >
          {skill.title}
        </TextSkillLink>
      </ListItem>
    ))}
  </List>
)

export default SkillSideMenu

SkillSideMenu.propTypes = {
  scene: PropTypes.object,
  className: PropTypes.string,
}
