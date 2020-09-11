import React from 'react'
import Seo from '../../seo'
import Header from '../../Organisms/Header'
import Error404 from '../../Organisms/Error404'
import Footer from '../../Organisms/Footer'
import styles from './styles.module.scss'

const NotFoundTemplate = () => {
  return (
    <div>
      <Seo title='404: Not found' />
      <Header />
      <main>
        <Error404 />
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}

export default NotFoundTemplate
