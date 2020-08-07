import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Container from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import SceneLink from '../../Organisms/SceneLink'
import {BoldHeading} from '../../Atoms/Heading'
import {LongTxt} from '../../Atoms/Txt'

const IndexTemplate = ({scenes}) => {
  return (
    <div className={styles.background}>
      <Header />
      <main>
        <Container className={styles.container}>
          <div className={styles.titleWrap}>
            <BoldHeading level={1} visualLevel={2} className={styles.title}>
              目標へ向かうためのWeb開発ロードマップ
            </BoldHeading>
            <LongTxt>
              学んでいるものが何に活かせるのかわからない。どこまで学べば良いのかわからない。
              <br />
              そんなあなたの不安を自信に変える、学習ロードマップです。
            </LongTxt>
          </div>
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
    </div>
  )
}

export default IndexTemplate

IndexTemplate.propTypes = {
  scenes: PropTypes.array,
}
