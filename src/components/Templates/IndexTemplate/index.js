import React from 'react'
import styles from './styles.module.scss'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import Seo from '../../seo'
import Heading, {BoldHeading} from '../../Atoms/Heading'
import Txt from '../../Atoms/Txt'
import Container from '../../Atoms/Container'
import Button from '../../Atoms/Button'
import {navigate, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import Main from '../../Atoms/Main'
import LazyImage from '../../Atoms/LazyImage'

const IndexTemplate = () => {
  const data = useStaticQuery(graphql`
    {
      mainVisualIcon: file(relativePath: {eq: "index/ken_icon.svg"}) {
        publicURL
      }
      sceneImage: file(relativePath: {eq: "index/scenes.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      skillImage: file(relativePath: {eq: "index/skills.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const content = {
    mainVisual: {
      title: 'Webプロダクト開発\n学習ロードマップ',
      subTitle: '学習の不安を自信に変えよう',
      buttonLabel: 'ロードマップを見る',
      image: data.mainVisualIcon.publicURL,
    },
    scene: {
      title: '目標までの道のりを知る',
      description:
        'プロダクトをつくれるWeb開発者になるまでの中間目標として5つのシーンを用意しました。次に学ぶことだけではなく、目標達成までの学習の全体像を確認することができます。',
      image: data.sceneImage.childImageSharp.fluid,
    },
    skill: {
      title: '自分のレベルに合わせて学ぶ',
      description:
        '自分のレベルに合わせて、どこまで学ぶかを決めることができます。本当に必要な学習項目に絞って、効率よく学習を進めましょう。',
      image: data.skillImage.childImageSharp.fluid,
    },
    cta: {
      title: 'さあ、はじめよう',
      subTitle: '学習の不安を自信に変えよう',
      buttonLabel: 'ロードマップを見る',
    },
  }

  return (
    <>
      <Seo title='HOME' lang='ja' />
      <Header />
      <Main>
        <Container className={styles.mainVisual}>
          <LazyImage
            src={content.mainVisual.image}
            alt={content.mainVisual.title}
            className={styles.mainVisualIcon}
          />
          <BoldHeading level={1} className={styles.mainVisualTitle}>
            {content.mainVisual.title}
          </BoldHeading>
          <Heading
            level={2}
            visualLevel={4}
            className={styles.mainVisualSubTitle}
          >
            {content.mainVisual.subTitle}
          </Heading>
          <Button onClick={() => navigate('/scenes')}>
            {content.mainVisual.buttonLabel}
          </Button>
        </Container>
        <section className={[styles.sceneSection, styles.background].join(' ')}>
          <Container className={styles.container}>
            <div className={styles.textWrap}>
              <BoldHeading level={3} className={styles.number}>
                01
              </BoldHeading>
              <BoldHeading level={3} className={styles.title}>
                {content.scene.title}
              </BoldHeading>
              <Txt lineHeightLevel={5}>{content.scene.description}</Txt>
            </div>
          </Container>
          <Img
            className={styles.sceneImage}
            fluid={content.scene.image}
            alt={content.scene.description}
          />
        </section>
        <section className={styles.section}>
          <Container>
            <div className={styles.textWrap}>
              <BoldHeading level={3} className={styles.number}>
                02
              </BoldHeading>
              <BoldHeading level={3} className={styles.title}>
                {content.skill.title}
              </BoldHeading>
              <Txt lineHeightLevel={5}>{content.skill.description}</Txt>
            </div>
          </Container>
          <Img
            className={styles.skillImage}
            fluid={content.skill.image}
            alt={content.skill.description}
          />
        </section>
        <Container tag={'section'} className={styles.section}>
          <div className={styles.cta}>
            <BoldHeading level={2} className={styles.ctaTitle}>
              {content.cta.title}
            </BoldHeading>
            <Heading level={3} visualLevel={5} className={styles.ctaSubTitle}>
              {content.cta.subTitle}
            </Heading>
            <Button onClick={() => navigate('/scenes')}>
              {content.cta.buttonLabel}
            </Button>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default IndexTemplate
