import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import OgpList from '../OgpList'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Txt from '../../Atoms/Txt'
import {BoldHeading, UnderlinedHeading} from '../../Atoms/Heading'
import List, {ListItem} from '../../Atoms/List'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBookReader} from '@fortawesome/free-solid-svg-icons'

const SkillGetStarted = ({getStarted}) => {
  const [activeLevel, setActiveLevel] = useState('easy')

  const data = useStaticQuery(graphql`
    {
      easy: file(relativePath: {eq: "skills/ben_icon.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      middle: file(relativePath: {eq: "skills/ken_icon.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const tabItems = [
    {
      id: 1,
      level: 'easy',
      title: 'プログラミング初心者',
      description: 'スキルをイメージできるレベル',
      icon: data.easy.childImageSharp.fluid,
      handleClick: () => setActiveLevel('easy'),
    },
    {
      id: 2,
      level: 'middle',
      title: 'ジュニアエンジニア',
      description: '自走できるレベル',
      icon: data.middle.childImageSharp.fluid,
      handleClick: () => setActiveLevel('middle'),
    },
  ]

  return (
    <div>
      <div className={styles.tab}>
        {tabItems.map(tabItem => (
          <button
            className={
              activeLevel === tabItem.level
                ? [styles.tabItem, styles.tabActive].join(' ')
                : styles.tabItem
            }
            key={tabItem.level}
            onClick={tabItem.handleClick}
          >
            <div className={styles.tabInner}>
              <div className={styles.tabIconWrap}>
                <Img
                  className={styles.tabIcon}
                  fluid={tabItem.icon}
                  alt={tabItem.title}
                />
                <div className={styles.tabTextWrap}>
                  <BoldHeading level={6} className={styles.levelText}>
                    レベル{tabItem.id}
                  </BoldHeading>
                  <BoldHeading level={6}>{tabItem.title}</BoldHeading>
                </div>
              </div>
              <Txt>{tabItem.description}</Txt>
            </div>
          </button>
        ))}
      </div>
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
