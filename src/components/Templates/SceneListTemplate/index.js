import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Container from '../../Atoms/Container'
import SceneLink from '../../Organisms/SceneLink'
import Seo from '../../Atoms/Seo'
import Main from '../../Atoms/Main'
import Heading from '../../Atoms/Heading'

const SceneListTemplate = ({scenes, location}) => (
  <>
    <Main className={styles.main}>
      <Container>
        <Heading level={1} visualLevel={2}>
          自分にあったシーンを選ぼう
        </Heading>
        <div className={styles.list}>
          {scenes.map(scene => (
            <SceneLink className={styles.item} scene={scene} key={scene.id} />
          ))}
        </div>
      </Container>
    </Main>
    <Footer />
  </>
)

export default SceneListTemplate

SceneListTemplate.propTypes = {
  scenes: PropTypes.array,
  location: PropTypes.object,
}
