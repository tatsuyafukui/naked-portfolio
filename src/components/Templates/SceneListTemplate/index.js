import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Container from '../../Atoms/Container'
import SceneLink from '../../Organisms/SceneLink'
import Seo from '../../Atoms/Seo'
import Main from '../../Atoms/Main'
import {BoldHeading} from '../../Atoms/Heading'

const SceneListTemplate = ({scenes, location}) => (
  <>
    <Seo
      title='シーン一覧'
      description='プロダクトをつくれるWeb開発者になるまでの中間目標として5つのシーンを用意しました。次に学ぶことだけではなく、目標達成までの学習の全体像を確認することができます。'
      slug={location.pathname}
      lang='ja'
    />
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
  </>
)

export default SceneListTemplate

SceneListTemplate.propTypes = {
  scenes: PropTypes.array,
  location: PropTypes.object,
}
