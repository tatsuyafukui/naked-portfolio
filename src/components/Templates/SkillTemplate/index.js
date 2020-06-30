import React from 'react'
import Img from 'gatsby-image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faLink} from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.scss'
import SEO from '../../seo'
import Breadcrumb from '../../Atoms/Breadcrumb'
import Container from '../../Atoms/Container'
import Link from '../../Atoms/Link'
import Txt, {DisableTxt, InfoTxt} from '../../Atoms/Txt'
import Overlay, {Front, Back} from '../../Atoms/Overlay'
import Heading, {BoldHeading} from '../../Atoms/Heading'
import Header from '../../Organisms/Header'
import Footer from '../../Organisms/Footer'
import List, {ListItem} from '../../Atoms/List'
import MediaObjectLayout from '../../Atoms/MediaObjectLayout'
import NavigationLink from '../../Molecules/NavigationLink'

const SkillTemplate = ({skill, recommended}) => (
  <>
    <SEO title={skill.title} description={skill.overview} lang={'ja'} />
    <Header />
    <main className={styles.main}>
      <Container>
        <Breadcrumb
          className={styles.breadcrumb}
          separator={<FontAwesomeIcon icon={faAngleRight} />}
        >
          <Link to='/'>
            <Txt>Home</Txt>
          </Link>
          <Link to={skill.scene.slug}>
            <Txt>{skill.scene.id}</Txt>
          </Link>
          <Txt>{skill.title}</Txt>
        </Breadcrumb>
      </Container>
      <Container tag='article' className={styles.container}>
        <Overlay
          className={[styles.visual, styles.content].join(' ')}
          overlayStyle={{backgroundColor: 'rgba(3, 0, 39, 0.39)'}}
        >
          <Front>
            <BoldHeading level={1} className={styles.title}>
              {skill.title}
            </BoldHeading>
          </Front>
          <Back>
            <Img fluid={skill.scene.image.childImageSharp.fluid} />
          </Back>
        </Overlay>
        <section className={styles.mainSection}>
          <section className={styles.section}>
            <section className={styles.block}>
              <Txt
                className={styles.content}
                dangerouslySetInnerHTML={{__html: skill.overview}}
              />
              <Img
                className={[styles.image, styles.content].join(' ')}
                fluid={skill.image.childImageSharp.fluid}
              />
            </section>
            <section className={styles.block}>
              <BoldHeading
                level={2}
                visualLevel={3}
                className={styles.heading3}
              >
                学ぶ目的
              </BoldHeading>
              <Txt
                dangerouslySetInnerHTML={{__html: skill.purpose}}
                className={styles.content}
              />
            </section>
          </section>
          <section className={styles.section}>
            <Heading level={2} className={styles.heading2}>
              学んでみよう
            </Heading>
            <section className={styles.block}>
              <BoldHeading level={3} className={styles.heading3}>
                学習の目安
              </BoldHeading>
              <List className={styles.guidelines}>
                <ListItem className={styles.guidelinesItem}>
                  <BoldHeading level={4} className={styles.heading4}>
                    基礎
                  </BoldHeading>
                  <List>
                    {skill.standard.basic.map(item => (
                      <ListItem key={item} className={styles.listItem}>
                        <Txt tag='span'>{item}</Txt>
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
                <ListItem className={styles.guidelinesItem}>
                  <BoldHeading level={4} className={styles.heading4}>
                    応用
                  </BoldHeading>
                  <List>
                    {skill.standard.practical.map(item => (
                      <ListItem key={item} className={styles.listItem}>
                        <Txt tag='span'>{item}</Txt>
                      </ListItem>
                    ))}
                  </List>
                </ListItem>
              </List>
            </section>
            <section className={styles.section}>
              <BoldHeading level={3} className={styles.heading3}>
                全体像をつかむには
              </BoldHeading>
              <Txt
                dangerouslySetInnerHTML={{__html: skill.overall}}
                className={styles.content}
              />
            </section>
            <div>
              {recommended.map(item => {
                // ogpがないサイトはリンクのみ
                if (!item.fields) {
                  return (
                    <div className={styles.marginBottom}>
                      <Link
                        to={item.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {item.url}
                      </Link>
                    </div>
                  )
                }

                const summary = getSummary(item.fields.ogp.twitterCard)

                const ogContent = (
                  <div className={styles.ogContent}>
                    <Heading level={5} className={styles.ogTitle}>
                      {item.fields.ogp.ogTitle}
                    </Heading>
                    <InfoTxt visualLevel={2} className={styles.truncateText}>
                      {/*<TextTruncate maxChars={25}>*/}
                      {item.isBook ? (
                        <NavigationLink>Amazonで詳細をみる</NavigationLink>
                      ) : (
                        item.fields.ogp.ogDescription
                      )}
                      {/*</TextTruncate>*/}
                    </InfoTxt>
                    {item.isBook ? null : (
                      <div className={styles.ogUrl} visualLevel={2}>
                        <FontAwesomeIcon
                          className={styles.linkIcon}
                          icon={faLink}
                        />
                        <DisableTxt className={styles.truncateText}>
                          {item.url}
                        </DisableTxt>
                      </div>
                    )}
                  </div>
                )

                return (
                  <div
                    key={item.id}
                    className={[styles.ogp, styles.marginBottom].join(' ')}
                  >
                    <Link
                      to={item.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {/*　ogpImageがある・なしでコンポーネントを出し分ける　*/}
                      {item.image ? (
                        <MediaObjectLayout
                          summary={summary}
                          className={styles[summary]}
                        >
                          <div>
                            <Img
                              fluid={item.image.childImageSharp.fluid}
                              alt={item.fields.ogp.ogTitle}
                              className={styles.ogImage}
                            />
                          </div>
                          {ogContent}
                        </MediaObjectLayout>
                      ) : (
                        ogContent
                      )}
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        </section>
      </Container>
    </main>
    <Footer />
  </>
)

export default SkillTemplate

const getSummary = twitterCard => {
  if (twitterCard === 'summary_large_image') return 'top'
  if (twitterCard === 'summary') return 'left'
  return 'right'
}
