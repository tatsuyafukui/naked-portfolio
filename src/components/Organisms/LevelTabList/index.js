import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Img from 'gatsby-image'
import Txt from '../../Atoms/Txt'
import {BoldHeading} from '../../Atoms/Heading'
import TabItem, {TabList} from '../../Atoms/Tab'
import {graphql, useStaticQuery} from 'gatsby'

const LevelTabList = ({value, onClick}) => {
  const {allLevelJson} = useStaticQuery(graphql`
    {
      allLevelJson {
        nodes {
          id
          description
          value
          title
          icon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `)

  return (
    <TabList
      className={styles.tabs}
      value={value}
      onClick={onClick}
      aria-label='level tabs'
    >
      {allLevelJson.nodes.map(level => (
        <TabItem key={level.id} className={styles.tabItem} value={level.value}>
          <div className={styles.tabIconWrap}>
            <Img
              className={styles.tabIcon}
              fluid={level.icon.childImageSharp.fluid}
              alt={level.title}
            />
            <div className={styles.tabTextWrap}>
              <BoldHeading level={6} className={styles.levelText}>
                レベル{level.id}
              </BoldHeading>
              <BoldHeading level={6}>{level.title}</BoldHeading>
            </div>
          </div>
          <Txt>{level.description}</Txt>
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
