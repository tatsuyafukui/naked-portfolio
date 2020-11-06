import React from 'react'
import styles from './styles.module.scss'
import Heading from '../../Atoms/Heading'
import Button from '../../Atoms/Button'
import Txt from '../../Atoms/Txt'
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
        <Heading className={styles.heading}>404 Not Found</Heading>
        <Txt lineHeightLevel={5} className={styles.subheading}>
          お探しのページは見つかりませんでした <br />
          下のボタンから再出発しましょう
        </Txt>
        <Button onClick={() => navigate('/scenes')}>シーン一覧</Button>
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
