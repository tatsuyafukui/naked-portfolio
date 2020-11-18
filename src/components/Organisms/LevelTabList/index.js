import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Img from 'gatsby-image'
import Txt from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import TabItem, {TabList} from '../../Atoms/Tab'
import {graphql, useStaticQuery} from 'gatsby'

const LevelTabList = ({value, onClick}) => {
  const data = useStaticQuery(graphql`
    {
      easy: file(relativePath: {eq: "skills/ben_icon.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      middle: file(relativePath: {eq: "skills/ken_icon.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
    <TabList
      className={styles.tabs}
      value={value}
      onClick={onClick}
      aria-label='level tabs'
    >
      {tabItems.map(tabItem => (
        <TabItem
          key={tabItem.id}
          className={styles.tabItem}
          value={tabItem.level}
        >
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
        </TabItem>
      ))}
    </TabList>
  )
}

export default LevelTabList

LevelTabList.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
}
