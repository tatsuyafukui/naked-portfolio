import React from 'react'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import {LongTxt} from '../../Atoms/Txt'
import Container from '../../Atoms/Container'
import {navigate, graphql, useStaticQuery} from 'gatsby'
// import Img from 'gatsby-image'

const Error404 = () => {
  const illusts = useStaticQuery(
    graphql`
      query {
        allFile(filter: {relativeDirectory: {eq: "404"}}) {
          nodes {
            id
            name
            publicURL
          }
        }
      }
    `
  )

  return (
    <div className={styles.root}>
      <Container className={styles.notfound404}>
        <Heading className={styles.heading}>Page not found 404</Heading>
        <LongTxt className={styles.subheading}>
          わぁ！海で迷子になってしまったみたい <br />
          ブラウザバックで前のページに戻ってください
        </LongTxt>
        <Button onClick={() => navigate('/')}>HOMEに戻る</Button>
      </Container>
      {illusts.allFile.nodes.map(illust => (
        <div
          className={[styles.image, styles[illust.name]].join(' ')}
          key={illust.id}
        >
          <img src={illust.publicURL} />
        </div>
      ))}
    </div>
  )
}

export default Error404
