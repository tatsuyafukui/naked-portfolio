import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../Organisms/Footer'
import Header from '../../Organisms/Header'
import styles from './styles.module.scss'
import Container from '../../Atoms/Container'
import {UnderlinedHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import {graphql, useStaticQuery} from 'gatsby'
import Main from '../../Atoms/Main'

const TrademarkTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      allTrademarksJson(sort: {fields: ownership}) {
        nodes {
          ownership
        }
      }
    }
  `)
  const trademarks = data.allTrademarksJson.nodes

  return (
    <div>
      <Header />
      <Main>
        <Container>
          <UnderlinedHeading className={styles.title}>
            商標について
          </UnderlinedHeading>
          {trademarks.map((trademark, index) => (
            <Txt lineHeightLevel={5} className={styles.item} key={index}>
              {trademark.ownership}
            </Txt>
          ))}
        </Container>
      </Main>
      <Footer />
    </div>
  )
}

TrademarkTemplate.propTypes = {
  location: PropTypes.object,
}

export default TrademarkTemplate
