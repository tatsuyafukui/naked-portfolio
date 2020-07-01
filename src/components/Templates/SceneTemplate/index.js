import React from 'react'
import PropTypes from 'prop-types'
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
import Heading, {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import SkillList from '../../Organisms/SkillList'

const SceneTemplate = ({scene, skills, open, onClick}) => (
  <>
    <SEO title={scene.title} description={scene.description} lang={'ja'} />
    <Header />
    <main className={styles.main}>
      <Container>
        <div className={styles.titleWrap}>
          <Breadcrumb
            className={styles.breadcrumb}
            separator={
              <FontAwesomeIcon className={styles.icon} icon={faAngleRight} />
            }
          >
            <Link className={styles.link} to='/'>
              <Txt>Home</Txt>
            </Link>
            <Txt>{scene.id}</Txt>
          </Breadcrumb>
          <Heading level={1} className={styles.title}>
            {scene.title}
          </Heading>
        </div>
      </Container>
      <Container className={styles.imageContainer}>
        <Img
          className={styles.visual}
          fluid={scene.image.childImageSharp.fluid}
          alt={scene.title}
        />
      </Container>
      <Container>
        <div className={styles.body}>
          <div>
            {/* PC */}
            <Txt className={styles.descriptionPc}>{scene.description}</Txt>
            {/* SP */}
            <Txt className={styles.descriptionSp}>
              <TextTruncate
                open={open}
                truncateText={
                  <button
                    key={'truncateText'}
                    className={styles.button}
                    onClick={onClick}
                  >
                    <InfoTxt>...続きを読む</InfoTxt>
                  </button>
                }
              >
                {scene.description}
              </TextTruncate>
            </Txt>
          </div>
          <div>
            <BoldHeading
              level={2}
              visualLevel={4}
              className={styles.requireLabel}
            >
              必要なスキル
            </BoldHeading>
            <SkillList skills={skills} />
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </>
)

SceneTemplate.propTypes = {
  scene: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SceneTemplate
