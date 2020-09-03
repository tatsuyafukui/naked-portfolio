import React from 'react'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import {LongTxt} from '../../Atoms/Txt'
import Container from '../../Atoms/Container'
import {navigate, graphql, useStaticQuery} from 'gatsby'

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
          下のボタンから再出発しましょう
        </LongTxt>
        <Button onClick={() => navigate('/')}>HOMEに戻る</Button>
      </Container>
      {illusts.allFile.nodes.map(illust => (
        <div
          className={[styles.image, styles[illust.name]].join(' ')}
          key={illust.id}
        >
          <img src={illust.publicURL} alt='' />
        </div>
      ))}
      <div className={styles.sun} />
    </div>
  )
}

export default Error404
