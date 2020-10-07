import React, {useState} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import OgpList from '../../Organisms/OgpList'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Txt from '../../Atoms/Txt'
import Heading from '../../Atoms/Heading'

const SkillOverall = ({overall}) => {
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
      title: '駆け出しエンジニア',
      description: '〇〇なレベル',
      icon: data.easy.childImageSharp.fluid,
    },
    {
      id: 2,
      level: 'middle',
      title: 'ジュニアエンジニア',
      description: '〇〇なレベル',
      icon: data.middle.childImageSharp.fluid,
    },
  ]

  return (
    <div>
      <div className={styles.tab}>
        {tabItems.map(tabItem => (
          <button
            className={styles.tabItem}
            key={tabItem.level}
            onClick={() => setActive(tabItem.level)}
          >
            <div className={styles.tabIconWrap}>
              <Img
                className={styles.tabIcon}
                fluid={tabItem.icon}
                alt={tabItem.title}
              />
              <div className={styles.tabTextWrap}>
                <Txt className={styles.levelText}>レベル{tabItem.id}</Txt>
                <Txt>{tabItem.title}</Txt>
              </div>
            </div>
            <Txt>{tabItem.description}</Txt>
          </button>
        ))}
      </div>
      <div>
        <Txt>{overall[active].description}</Txt>
        {overall[active].tasks.map((task, index) => (
          <div className={styles.taskWrap} key={index}>
            <Heading className={styles.taskTitle}>{task.title}</Heading>
            {task.child.map((child, index) => (
              <Txt className={styles.taskText} key={index}>
                {child}
              </Txt>
            ))}
          </div>
        ))}
        <OgpList ogpList={overall[active].recommended} />
      </div>
    </div>
  )
}
export default SkillOverall

SkillOverall.propTypes = {
  overall: PropTypes.object,
}
