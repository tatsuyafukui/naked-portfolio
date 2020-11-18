import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Link from '../../Atoms/Link'
import {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import LazyImage from '../../Atoms/LazyImage'
import HeroImage from '../../Molecules/HeroImage'
import Container from '../../Atoms/Container'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import LongDescription from '../../Molecules/LongDescription'

const Scene = ({scene}) => (
  <section className={styles.firstView}>
    <HeroImage>
      <LazyImage src={scene.image.publicURL} alt={scene.title} />
    </HeroImage>
    <Container>
      <NavigationBreadcrumb>
        <Link to='/scenes'>シーン一覧</Link>
        <Txt>{scene.numberTitle}</Txt>
      </NavigationBreadcrumb>
      <div className={styles.titleWrap}>
        <BoldHeading level={1} className={styles.title}>
          {scene.title}
        </BoldHeading>
        <LongDescription className={styles.description}>
          {scene.description}
        </LongDescription>
      </div>
    </Container>
  </section>
)

export default Scene

Scene.propTypes = {
  scene: PropTypes.object,
}
