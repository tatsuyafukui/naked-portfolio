import React, {useState} from 'react'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {InfoTxt} from '../../Atoms/Txt'
import TextTruncate from '../../Atoms/TextTruncate'
import Heading from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'

const SceneTemplate = ({scene, skills, open, onClick}) => (
  <div>
    <SEO title={scene.title} description={scene.description} lang={'ja'} />
    <Header />
    <main className={styles.main}>
      <Container>
        <div>
          <div>
            <Breadcrumb
              className={styles.breadcrumb}
              separator={<FontAwesomeIcon icon={faAngleRight} />}
            >
              <Link to='/'>
                <Txt>Home</Txt>
              </Link>
              <Txt>{scene.id}</Txt>
            </Breadcrumb>
            <Heading level={1} className={styles.title}>
              {scene.title}
            </Heading>
          </div>
          <div>
            <Img
              className={styles.visual}
              fluid={scene.image.childImageSharp.fluid}
              alt={scene.title}
            />
          </div>
        </div>
        <div className={styles.body}>
          <div>
            {/* PC */}
            <Txt className={styles.descriptionPc}>{scene.description}</Txt>
            {/* SP */}
            <Txt className={styles.descriptionSp}>
              <TextTruncate
                open={open}
                truncateText={
                  <button className={styles.button} onClick={onClick}>
                    <InfoTxt>...続きを読む</InfoTxt>
                  </button>
                }
              >
                {scene.description}
              </TextTruncate>
            </Txt>
          </div>
          <div>
            <Heading level={4} className={styles.requireLabel}>
              必要なスキル
            </Heading>
            <SkillList skills={skills} />
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </div>
)

export default SceneTemplate
