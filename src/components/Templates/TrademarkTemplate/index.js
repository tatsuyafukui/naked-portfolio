import React from 'react'
import Seo from '../../seo'
import PropTypes from 'prop-types'
import Footer from '../../Organisms/Footer'
import Header from '../../Organisms/Header'
import styles from './styles.module.scss'
import Container from '../../Atoms/Container'
import NavigationBreadcrumb from '../../Molecules/NavigationBreadcrumb'
import Link from '../../Atoms/Link'
import {UnderlinedHeading} from '../../Atoms/Heading'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {graphql} from 'gatsby'

const TrademarkTemplate = ({data}) => {
  const trademarks = data.allTrademarksJson.edges.node

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
          <UnderlinedHeading>Trademark</UnderlinedHeading>
          {trademarks.map(trademark => (
            <LongTxt key={trademark.id}>{trademark.ownership}</LongTxt>
          ))}
        </Container>
      </main>
      <Footer />
    </div>
  )
}

TrademarkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TrademarkTemplate

export const query = graphql`
  query {
    allTrademarksJson {
      edges {
        node {
          id
          ownership
        }
      }
    }
  }
`
