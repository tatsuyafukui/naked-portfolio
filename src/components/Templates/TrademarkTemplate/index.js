import React from 'react'
import Seo from '../../seo'
import Footer from '../../Organisms/Footer'
import Header from '../../Organisms/Header'
import styles from './styles.module.scss'
import Container from '../../Atoms/Container'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Link from '../../Atoms/Link'
import {UnderlinedHeading} from '../../Atoms/Heading'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {graphql, useStaticQuery} from 'gatsby'

const TrademarkTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allTrademarksJson {
        nodes {
          id
          ownership
        }
      }
    }
  `)
  const trademarks = data.allTrademarksJson.nodes

  return (
    <div>
      <Seo title='Trademark' />
      <Header />
      <main className={styles.main}>
        <Container>
          <NavigationBreadcrumb className={styles.breadcrumb}>
            <Link to='/'>Home</Link>
            <Txt>商標について</Txt>
          </NavigationBreadcrumb>
          <UnderlinedHeading>商標について</UnderlinedHeading>
          {trademarks.map(trademark => (
            <LongTxt className={styles.item} key={trademark.id}>
              {trademark.ownership}
            </LongTxt>
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default TrademarkTemplate
