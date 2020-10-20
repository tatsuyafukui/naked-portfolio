import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Container from '../../Atoms/Container'
import SceneLink from '../../Organisms/SceneLink'
import Seo from '../../seo'
import Main from '../../Atoms/Main'
import {BoldHeading} from '../../Atoms/Heading'

const SceneListTemplate = ({scenes}) => (
  <div className={styles.background}>
    <Seo title='シーン一覧' />
    <Header />
    <Main>
      <Container>
        <BoldHeading level={1} visualLevel={2} className={styles.heading}>
          自分にあったシーンを選ぼう
        </BoldHeading>
        <div className={styles.list}>
          {scenes.map(scene => (
            <SceneLink className={styles.item} scene={scene} key={scene.id} />
          ))}
        </div>
      </Container>
    </Main>
    <Footer />
  </div>
)

export default SceneListTemplate

SceneListTemplate.propTypes = {
  scenes: PropTypes.array,
}
