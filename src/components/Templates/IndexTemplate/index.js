import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import MainVisual from '../../Organisms/MainVisual'
import Container from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import Link from '../../Atoms/Link'
import Heading from '../../Atoms/Heading'
import {InfoTxt} from '../../Atoms/Txt'

const IndexTemplate = ({topImage, scenes}) => {
  return (
    <>
      <Header />
      <main>
        <MainVisual />
        <Container className={styles.container}>
          <List>
            <ListItem className={styles.item}>
              <Link to='/'>
                <MediaObjectLayout>
                  <img src="https://placehold.jp/440x293.png" alt="placeholder"/>
                  <div className={styles.titleWrap}>
                    <InfoTxt fontSize='xl' className={styles.number}>シーン1</InfoTxt>
                    <Heading level={2}>Webページを作れるようになろう</Heading>
                  </div>
                </MediaObjectLayout>
              </Link>
            </ListItem>
          </List>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default IndexTemplate
