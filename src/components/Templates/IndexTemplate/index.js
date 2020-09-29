import React from 'react'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Seo from '../../seo'
import {BoldHeading, HighlightedHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import {NarrowedContainer} from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import Button from '../../Atoms/Button'
import {navigate} from 'gatsby'
import PropTypes from 'prop-types'
import LazyImage from '../../Atoms/LazyImage'

const IndexTemplate = ({scenes}) => {
  return (
    <div>
      <Seo title='HOME' />
      <Header />
      <div className={styles.title}>
        <BoldHeading visualLevel={1}>journey</BoldHeading>
        <br />
        <BoldHeading visualLevel={3}>
          - Web開発者になるための学習ロードマップ -
        </BoldHeading>
      </div>
      <main className={styles.main}>
        <NarrowedContainer tag='article' className={styles.container}>
          <div>
            <HighlightedHeading
              level={2}
              visualLevel={4}
              className={styles.highlightedHeading}
            >
              目標に向かう学習をしよう
            </HighlightedHeading>
            <Txt lineHeightLevel={5}>
              「学んだことが何に活かせるのかわからない」
              <br />
              「何をどこまで学べば良いのかわからない」
              <br />
              <br />
              そんな<strong>不安を自信に変えるために目標へ向かう学習</strong>
              を始めましょう。
              <br />
              <br />
              学習を進める上で目標を持つことはとても大事です。
              <br />
              目標があると<strong>学ぶ理由が明確</strong>になり、
              <strong>モチベーション維持</strong>に繋がります。
              <br />
              また、目標があれば詳細な学習の計画を立てることもできます。
              <br />
              <br />
              もし、あなたがWeb開発者になりたいという目標を持っているなら、きっとjourneyが役に立ちます。
            </Txt>
          </div>
          <div>
            <HighlightedHeading
              level={2}
              visualLevel={4}
              className={styles.highlightedHeading}
            >
              初めての方へ
            </HighlightedHeading>
            <List className={styles.standardItem}>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt lineHeightLevel={5} tag='span'>
                    <strong>教材ではありません</strong>
                  </Txt>
                </ListItem>
                <Txt lineHeightLevel={5} className={styles.listItemTxt}>
                  ロードマップは目標に対しての計画表です。紹介している教材と一緒に使うことで最大限の効果を発揮します。
                </Txt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt lineHeightLevel={5} tag='span'>
                    <strong>入門向けではありません</strong>
                  </Txt>
                </ListItem>
                <Txt lineHeightLevel={5} className={styles.listItemTxt}>
                  Web開発者を目指す人のための実践的な内容となっており、分からないことがあれば自身で解決する力が必要となります。
                </Txt>
              </div>
            </List>
          </div>
          <div>
            <HighlightedHeading
              level={2}
              visualLevel={4}
              className={styles.highlightedHeading}
            >
              5つのシーン
            </HighlightedHeading>
            <Txt lineHeightLevel={5}>
              各スキルは５つのシーン（中間目標）に分けられています。自分の現在地やゴールに合ったシーンを選択してスキルを確認しましょう。
              <br />
              <br />
            </Txt>
            <div className={styles.scenes}>
              {scenes.map(scene => (
                <LazyImage key={scene.id} src={scene.image.publicURL} />
              ))}
            </div>
          </div>
          <Button onClick={() => navigate('/scenes')} className={styles.button}>
            シーンを選ぼう
          </Button>
        </NarrowedContainer>
      </main>
      <Footer />
    </div>
  )
}

export default IndexTemplate

IndexTemplate.propTypes = {
  scenes: PropTypes.array,
}
