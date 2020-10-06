import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import styles from './styles.module.scss'
import OgpList from '../../Organisms/OgpList'

const SkillOverall = ({overall}) => {
  const [active, setActive] = useState('easy')

  const tabItems = [
    {
      level: 'easy',
      title: '駆け出しエンジニア',
      description: '〇〇なレベル',
    },
    {
      level: 'middle',
      title: 'ジュニアエンジニア',
      description: '〇〇なレベル',
    },
  ]

  return (
    <div>
      <ul>
        {tabItems.map(tabItem => (
          <li key={tabItem.level} onClick={() => setActive(tabItem.level)}>
            {tabItem.title}
          </li>
        ))}
      </ul>
      <div>
        <p>{overall[active].description}</p>
        {overall[active].tasks.map((task, index) => (
          <div key={index}>
            <p>{task.title}</p>
            {task.child.map((child, index) => (
              <p key={index}>{child}</p>
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
