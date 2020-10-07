import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import OgpList from '../OgpList'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Txt from '../../Atoms/Txt'
import {BoldHeading, UnderlinedHeading} from '../../Atoms/Heading'
import List, {ListItem} from '../../Atoms/List'

const SkillGetStarted = ({getStarted}) => {
  const [active, setActive] = useState('easy')

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
    },
    {
      id: 2,
      level: 'middle',
      title: 'ジュニアエンジニア',
      description: '自走できるレベル',
      icon: data.middle.childImageSharp.fluid,
    },
  ]

  return (
    <div>
      <div className={styles.tab}>
        {tabItems.map(tabItem => (
          <button
            className={
              active === tabItem.level
                ? [styles.tabItem, styles.tabActive].join(' ')
                : styles.tabItem
            }
            key={tabItem.level}
            onClick={() => setActive(tabItem.level)}
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
        {/* <Txt>{getStarted[active].description}</Txt> */}
        <List>
          {getStarted[active].tasks.map((task, index) => (
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
          おすすめの教材
        </UnderlinedHeading>
        <OgpList ogpList={getStarted[active].recommended} />
      </div>
    </div>
  )
}
export default SkillGetStarted

SkillGetStarted.propTypes = {
  getStarted: PropTypes.object,
}
