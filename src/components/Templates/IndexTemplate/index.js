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
      mainVisualIcon: file(relativePath: {eq: "index/kenIcon.svg"}) {
        publicURL
      }
      mainVisualBackground: file(relativePath: {eq: "index/mvBackground.svg"}) {
        publicURL
      }
      mainVisualBackgroundSP: file(
        relativePath: {eq: "index/mvBackgroundSp.svg"}
      ) {
        publicURL
      }
      sceneImage: file(relativePath: {eq: "index/scenes.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sceneImageSP: file(relativePath: {eq: "index/scenesSp.png"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
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

  const sceneImageSources = [
    data.sceneImage.childImageSharp.fluid,
    {
      ...data.sceneImageSP.childImageSharp.fluid,
      media: `(max-width: 544px)`,
    },
  ]

  const content = {
    mainVisual: {
      title: 'Webプロダクト開発\n学習ロードマップ',
      subTitle: '学習の不安を自信に変えよう',
    },
    scene: {
      number: '01',
      title: '目標までの道のりを知る',
      description:
        'プロダクトをつくれるWeb開発者になるまでの中間目標として5つのシーンを用意しました。次に学ぶことだけではなく、目標達成までの学習の全体像を確認することができます。',
    },
    skill: {
      number: '02',
      title: '自分のレベルに合わせて学ぶ',
      description:
        '自分のレベルに合わせて、どこまで学ぶかを決めることができます。本当に必要な学習項目に絞って、効率よく学習を進めましょう。',
    },
    cta: {
      title: 'さあ、はじめよう',
      subTitle: '学習の不安を自信に変えよう',
    },
    buttonLabel: 'ロードマップを見る',
  }

  return (
    <>
      <Seo title='HOME' lang='ja' />
      <Header />
      <Main>
        <div className={styles.mainVisualWrap}>
          <LazyImage
            src={data.mainVisualBackground.publicURL}
            alt={content.mainVisual.title}
            className={styles.mainVisualBackground}
          />
          <LazyImage
            src={data.mainVisualBackgroundSP.publicURL}
            alt={content.mainVisual.title}
            className={[
              styles.mainVisualBackground,
              styles.mainVisualBackgroundSp,
            ].join(' ')}
          />
          <Container className={styles.mainVisual}>
            <div>
              <LazyImage
                src={data.mainVisualIcon.publicURL}
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
                {content.buttonLabel}
              </Button>
            </div>
          </Container>
        </div>
        <Container tag='section' className={styles.sectionContainer}>
          <div className={styles.textWrap}>
            <BoldHeading level={2} visualLevel={3} className={styles.number}>
              {content.scene.number}
            </BoldHeading>
            <BoldHeading level={3} className={styles.title}>
              {content.scene.title}
            </BoldHeading>
            <Txt lineHeightLevel={5}>{content.scene.description}</Txt>
          </div>
          <Img fluid={sceneImageSources} alt={content.scene.description} />
        </Container>
        <Container tag='section' className={styles.sectionContainer}>
          <div className={styles.textWrap}>
            <BoldHeading
              level={2}
              visualLevel={3}
              className={[styles.number, styles.numberAccentColor].join(' ')}
            >
              {content.skill.number}
            </BoldHeading>
            <BoldHeading level={3} className={styles.title}>
              {content.skill.title}
            </BoldHeading>
            <Txt lineHeightLevel={5}>{content.skill.description}</Txt>
          </div>
          <div className={styles.scrollImageWrap}>
            <Img
              fluid={data.skillImage.childImageSharp.fluid}
              alt={content.skill.description}
            />
          </div>
        </Container>
        <Container tag='section' className={styles.sectionContainer}>
          <div className={styles.cta}>
            <BoldHeading level={2} className={styles.ctaTitle}>
              {content.cta.title}
            </BoldHeading>
            <Heading level={3} visualLevel={5} className={styles.ctaSubTitle}>
              {content.cta.subTitle}
            </Heading>
            <Button onClick={() => navigate('/scenes')}>
              {content.buttonLabel}
            </Button>
          </div>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default IndexTemplate
