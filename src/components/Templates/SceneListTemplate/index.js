import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Container from '../../Atoms/Container'
// import List, {ListItem} from '../../Atoms/List'
import SceneLink from '../../Organisms/SceneLink'
import Seo from '../../seo'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'

const SceneListTemplate = ({scenes}) => (
  <div className={styles.background}>
    <Seo title='シーン一覧' />
    <Header />
    <main className={styles.main}>
      <Container>
        <NavigationBreadcrumb>
          <Link to='/'>Home</Link>
          <Txt>シーン一覧</Txt>
        </NavigationBreadcrumb>
        <div className={styles.list}>
          {scenes.map(scene => (
            <SceneLink className={styles.item} scene={scene} key={scene.id} />
          ))}
        </div>
      </Container>
    </main>
    <Footer />
  </div>
)

export default SceneListTemplate

SceneListTemplate.propTypes = {
  scenes: PropTypes.array,
}
