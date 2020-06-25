import React from 'react'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import MainVisual from '../../Organisms/MainVisual'
import Container from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import SceneLink from '../../Organisms/SceneLink'

const IndexTemplate = ({scenes}) => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <Container className={styles.container}>
          <List>
            {scenes.map(scene => (
              <ListItem className={styles.item} key={scene.id}>
                <SceneLink scene={scene} />
              </ListItem>
            ))}
          </List>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default IndexTemplate
