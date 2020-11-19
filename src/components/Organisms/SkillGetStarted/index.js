import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import OgpList from '../OgpList'
import Txt from '../../Atoms/Txt'
import {BoldHeading, UnderlinedHeading} from '../../Atoms/Heading'
import List, {ListItem} from '../../Atoms/List'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookReader} from '@fortawesome/free-solid-svg-icons'
import LevelTabList from '../LevelTabList'

const SkillGetStarted = ({getStarted}) => {
  const [activeLevel, setActiveLevel] = useState('easy')

  const handleClick = (event, newValue) => {
    setActiveLevel(newValue)
  }

  return (
    <div>
      <LevelTabList value={activeLevel} onClick={handleClick} />
      <div>
        <Txt lineHeightLevel={5}>{getStarted[activeLevel].description}</Txt>
        <List>
          {getStarted[activeLevel].tasks.map((task, index) => (
            <ListItem className={styles.taskWrap} key={index}>
              <BoldHeading level={6} className={styles.taskTitle}>
                {task.title}
              </BoldHeading>
              {task.child.map((child, index) => (
                <Txt className={styles.taskText} key={index}>
                  {child}
                </Txt>
              ))}
            </ListItem>
          ))}
        </List>
        <UnderlinedHeading level={5} className={styles.booksHeading}>
          <FontAwesomeIcon className={styles.bookIcon} icon={faBookReader} />
          おすすめの教材
        </UnderlinedHeading>
        <OgpList ogpList={getStarted[activeLevel].recommended} />
      </div>
    </div>
  )
}
export default SkillGetStarted

SkillGetStarted.propTypes = {
  getStarted: PropTypes.object,
}
