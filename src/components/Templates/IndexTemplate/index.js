import React from 'react'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Seo from '../../seo'
import {BoldHeading, HighlightedHeading} from '../../Atoms/Heading'
import Txt, {LongTxt} from '../../Atoms/Txt'
import {NarrowedContainer} from '../../Atoms/Container'
import List, {ListItem} from '../../Atoms/List'
import Button from '../../Atoms/Button'
import {navigate} from 'gatsby'

const IndexTemplate = () => {
  return (
    <div className={styles.background}>
      <Seo title='HOME' />
      <Header />
      <div className={styles.title}>
        <BoldHeading visualLevel={1}>journey</BoldHeading>
        <br />
        <BoldHeading visualLevel={3}>- Web開発の学習ロードマップ -</BoldHeading>
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
            <LongTxt>
              journeyは<strong>Web開発を仕事にしたい人</strong>
              のためのロードマップです。
              <br />
              <br />
              もし、あなたがWeb開発者（フロントエンドエンジニア、バックエンドエンジニア、インフラエンジニアなど）になりたいという目標を持っているなら、きっとjourneyが役に立ちます。
              <br />
              <br />
              「学んだことが何に活かせるのかわからない」
              <br />
              「何をどこまで学べば良いのかわからない」 <br />
              <br />
              そんな
              <strong>不安を自信に変えて、目標へ向かう</strong>
              学習を始めましょう。
            </LongTxt>
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
                  <Txt tag='span'>
                    <strong>内容は少し難しいかもしれません</strong>
                  </Txt>
                </ListItem>
                <LongTxt className={styles.listItemTxt}>
                  スキルの紹介では技術用語がたくさん出てきます。それらを学ぶ方法は紹介していますが、解説があるのはごく一部です。自分には難しいと感じたら入門向けの情報を探してみましょう。
                </LongTxt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>教材そのものではありません</strong>
                  </Txt>{' '}
                </ListItem>
                <LongTxt className={styles.listItemTxt}>
                  ロードマップは目標に対しての計画表です。実際に学ぶ教材と一緒に使うことで最大限の効果を発揮します。教材も紹介していますので、ぜひ合わせてご利用下さい。{' '}
                </LongTxt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>学習には時間がかかります</strong>
                  </Txt>{' '}
                </ListItem>
                <LongTxt className={styles.listItemTxt}>
                  journeyではWeb開発に必要なスキルを24個に分けて紹介しています。1つ学ぶだけでも数週間〜数ヶ月かかることもありますが、焦らずに1歩ずつ目標へ向かいましょう。{' '}
                </LongTxt>
              </div>
            </List>
          </div>
          <div>
            <HighlightedHeading
              level={2}
              visualLevel={4}
              className={styles.highlightedHeading}
            >
              スキルの学び方
            </HighlightedHeading>
            <LongTxt>各スキルは次のように構成されています。</LongTxt>
            <br />
            <List className={styles.standardItem}>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>概要</strong>
                  </Txt>
                </ListItem>
                <LongTxt visualLevel={2} className={styles.listItemTxt}>
                  <strong>イメージを掴む</strong>ための簡単な説明と図解。
                </LongTxt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>学ぶ目的</strong>
                  </Txt>{' '}
                </ListItem>
                <LongTxt visualLevel={2} className={styles.listItemTxt}>
                  目標のためにスキルが<strong>なぜ必要</strong>か。実践で
                  <strong>どう活かす</strong>のか。
                </LongTxt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>ここから学ぼう</strong>
                  </Txt>{' '}
                </ListItem>
                <LongTxt visualLevel={2} className={styles.listItemTxt}>
                  スキルを<strong>どう学ぶ</strong>のか。
                  <strong>どこから押さえる</strong>のがいいのか。
                </LongTxt>
              </div>
              <div>
                <ListItem className={styles.listItem}>
                  <Txt tag='span'>
                    <strong>チェックポイント</strong>
                  </Txt>{' '}
                </ListItem>
                <LongTxt visualLevel={2} className={styles.listItemTxt}>
                  スキルを<strong>どこまで学べばいい</strong>
                  のか。学んだことの振り返り。
                </LongTxt>
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
            <LongTxt>
              スキルは５つの中間目標に分けられています。
              <br />
              <br />
              journeyではその中間目標を
              <strong>シーン</strong>
              と呼んでいます。自分の現在地に合ったシーンを選択してスキルを選択しましょう。
              <br />
              <br />
            </LongTxt>
            <List className={styles.standardItem}>
              <div>
                <ListItem className={styles.olItem}>
                  <Txt visualLevel={2} tag='span'>
                    <strong>１. つくる楽しさを知ろう</strong>
                  </Txt>
                </ListItem>
              </div>
              <div>
                <ListItem className={styles.olItem}>
                  <Txt visualLevel={2} tag='span'>
                    <strong>２. プログラミングの世界へ1歩踏み出そう</strong>
                  </Txt>{' '}
                </ListItem>
              </div>
              <div>
                <ListItem className={styles.olItem}>
                  <Txt visualLevel={2} tag='span'>
                    <strong>３. みんなでアプリケーションを開発しよう</strong>
                  </Txt>{' '}
                </ListItem>
              </div>
              <div>
                <ListItem className={styles.olItem}>
                  <Txt visualLevel={2} tag='span'>
                    <strong>
                      ４. 公開できるプロダクトに必要なことを知ろう
                    </strong>
                  </Txt>{' '}
                </ListItem>
              </div>
              <div>
                <ListItem className={styles.olItem}>
                  <Txt visualLevel={2} tag='span'>
                    <strong>５. 継続してプロダクトを届けよう</strong>
                  </Txt>{' '}
                </ListItem>
              </div>
            </List>
          </div>
          <Button onClick={() => navigate('/scenes')} className={styles.button}>
            シーンを選ぼう
          </Button>
        </NarrowedContainer>
      </main>
      <Footer className={styles.footer} />
    </div>
  )
}

export default IndexTemplate
