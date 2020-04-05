import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import Image from '../../Atoms/Img';
import { Milestones } from '../../../constants';
import style from './style.module.scss';
import { PrimaryButton } from '../../Atoms/Button';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { InlineSection } from '../../Atoms/Section';
import Img from 'gatsby-image';
import Milestone from '../MilestoneIntroduction';

const CreativeRoadMap: React.FC = React.memo(() => {
  const data = useStaticQuery(graphql`
    fragment servicesImage on File {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    query {
      # top page image
      rocketImage: file(relativePath: { eq: "top/rocket.png" }) {
        ...servicesImage
      }
      successImage: file(relativePath: { eq: "top/success.png" }) {
        ...servicesImage
      }
      pathNodeImage: file(relativePath: { eq: "top/path-nodejs.png" }) {
        ...servicesImage
      }
    }
  `);

  const milestoneList = [
    {
      id: 'milestone5',
      heading: '継続してプロダクトを届けよう',
      reverse: false,
      link: '/milestones/keep-delivering',
      image: Milestones.milestoneImage,
      content:
        'Webアプリケーションは公開して終わりではありません\n' +
        '新しい機能を追加し続けるために、継続してプロダクトを届ける準備をしましょう。',
    },
    {
      id: 'milestone4',
      heading: '公開できるプロダクトに必要なことを知ろう',
      reverse: true,
      link: '/milestones/product-release',
      image: Milestones.milestoneImage,
      content:
        'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
    },
    {
      id: 'milestone3',
      heading: 'みんなで開発しよう',
      reverse: false,
      link: '/milestones/develop-together',
      image: Milestones.milestoneImage,
      content:
        '仲間と開発することはプロダクトを作る面白さの１つです。\n' +
        'チーム開発の基礎を学んで仲間を集める準備をしましょう。',
    },
    {
      id: 'milestone2',
      heading: 'Webアプリケーションを作ってみよう',
      reverse: true,
      link: '/milestones/create-web-application',
      image: Milestones.milestoneImage,
      content:
        '仲間と開発することはプロダクトを作る面白さの１つです。チーム開発の基礎を学んで仲間を集める準備をしましょう。',
    },
    {
      id: 'milestone1',
      heading: 'Webページを作れるようになろう',
      reverse: false,
      link: '/milestones/create-web-page',
      image: Milestones.milestoneImage,
      content:
        'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
    },
  ];

  return (
    <>
      <InlineSection>
        <div style={{ padding: '40px' }}>
          <Img fluid={data.successImage.childImageSharp.fluid} />;
        </div>
        <div>
          <div>
            <Heading>創れる人になろう</Heading>
            <Txt>
              自分や誰かのために考えたことを形にし、世の中に出そう。
              様々な職種の人とともに価値を生み出せる人になろう。
            </Txt>
            <div className={style.buttonContainer}>
              <Link to={'/'}>
                <PrimaryButton>みんなの成果物</PrimaryButton>
              </Link>
              <Link to={'/'}>
                <PrimaryButton>目標を設定する</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
      </InlineSection>
      <InlineSection reverse>
        <div>
          <Img fluid={data.rocketImage.childImageSharp.fluid} />;
        </div>
        <div>
          <div>
            <Heading>夢に向かって飛び立とう</Heading>
            <Txt>
              夢への道は人それぞれ。可能性を広げる道はアナタ次第。
              これまで学んだことを自信に変えて飛び立ちましょう！
            </Txt>
          </div>
        </div>
      </InlineSection>
      {milestoneList.map(item => {
        return (
          <Milestone
            key={item.id}
            id={item.id}
            heading={item.heading}
            reverse={item.reverse}
            link={item.link}
            image={item.image}
            content={item.content}
          />
        );
      })}
    </>
  );
});

export default CreativeRoadMap;
