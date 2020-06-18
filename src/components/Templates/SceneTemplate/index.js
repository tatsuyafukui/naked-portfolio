import React from 'react'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt from '../../Atoms/Txt'
import Heading from '../../Atoms/Heading'

const SceneTemplate = ({scene}) => {
  return (
    <div>
      {/*<SEO*/}
      {/*  title={scene.title}*/}
      {/*  description={scene.description}*/}
      {/*  lang={'ja'}*/}
      {/*/>*/}
      <Header />
      <main className={styles.main}>
        <Container>
          <div>
            <div>
              <Breadcrumb className={styles.breadcrumb}>
                <Link to='/'>
                  <Txt>Home</Txt>
                </Link>
                <Txt>{scene.id}</Txt>
              </Breadcrumb>
              <Heading level={1} className={styles.title}>
                {scene.title}
              </Heading>
            </div>
            <div className={styles.visual}>
              <img src={scene.image} alt={scene.title} />
            </div>
          </div>
          <div className={styles.body}>
            <div>
              <p dangerouslySetInnerHTML={{__html: scene.description}} />
            </div>
            <div>
              <Heading level={4} className={styles.requireLabel}>
                必要なスキル
              </Heading>
              {/* SkillList */}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default SceneTemplate
