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
  <div>
    <SEO title={scene.heading} description={scene.description} lang={'ja'} />
    <Header />
    <main className={styles.main}>
      <div>
        <Container>
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
              {scene.heading}
            </Heading>
          </div>
        </Container>
        <Container className={styles.container}>
          <div>
            <Img
              className={styles.visual}
              fluid={scene.image.childImageSharp.fluid}
              alt={scene.heading}
            />
          </div>
        </Container>
      </div>
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
            <BoldHeading level={4} className={styles.requireLabel}>
              必要なスキル
            </BoldHeading>
            <SkillList skills={skills} />
          </div>
        </div>
      </Container>
    </main>
    <Footer />
  </div>
)

SceneTemplate.propTypes = {
  scene: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SceneTemplate
