import React from 'react';
import { ImageName } from '../constants';
import Layout from '../components/Templates/Layout';
import SEO from '../components/seo';
import MilestoneList from '../components/Organisms/MilestoneList';
import CreativeSection from '../components/Organisms/CreativeSection';
import RocketSection from '../components/Organisms/RocketSection';
import LetsStartProgate from "../components/Organisms/LetsStartProgate";

const IndexPage = () => {
  // const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //           excerpt
  //           timeToRead
  //           html
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <SEO title="Home" />
      <CreativeSection
        heading={'創れる人になろう'}
        content={
          '自分や誰かのために考えたことを形にし、世の中に出そう。\n' +
          '様々な職種の人とともに価値を生み出せる人になろう。'
        }
      />
      <RocketSection
        heading={'夢に向かって飛び立とう'}
        content={
          '夢への道は人それぞれ。可能性を広げる道はアナタ次第。\n' +
          'これまで学んだことを自信に変えて飛び立ちましょう！'
        }
      />
      <MilestoneList
        list={[
          {
            id: 'milestone5',
            heading: '継続してプロダクトを届けよう',
            reverse: false,
            link: '/milestones/keep-delivering',
            image: ImageName.milestoneImage,
            content:
              'Webアプリケーションは公開して終わりではありません\n' +
              '新しい機能を追加し続けるために、継続してプロダクトを届ける準備をしましょう。',
          },
          {
            id: 'milestone4',
            heading: '公開できるプロダクトに必要なことを知ろう',
            reverse: true,
            link: '/milestones/product-release',
            image: ImageName.milestoneImage,
            content:
              'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
          },
          {
            id: 'milestone3',
            heading: 'みんなで開発しよう',
            reverse: false,
            link: '/milestones/develop-together',
            image: ImageName.milestoneImage,
            content:
              '仲間と開発することはプロダクトを作る面白さの１つです。\n' +
              'チーム開発の基礎を学んで仲間を集める準備をしましょう。',
          },
          {
            id: 'milestone2',
            heading: 'Webアプリケーションを作ってみよう',
            reverse: true,
            link: '/milestones/create-web-application',
            image: ImageName.milestoneImage,
            content:
              '仲間と開発することはプロダクトを作る面白さの１つです。チーム開発の基礎を学んで仲間を集める準備をしましょう。',
          },
          {
            id: 'milestone1',
            heading: 'Webページを作れるようになろう',
            reverse: false,
            link: '/milestones/create-web-page',
            image: ImageName.milestoneImage,
            content:
              'プロダクトを公開するには責任が伴います。ユーザーに安心して使ってもらえるようにセキュリティの基本について学びましょう。',
          },
        ]}
      />
      <LetsStartProgate/>
    </Layout>
  );

  // return (
  //     <Layout>
  //       <SEO title="Home" />
  //       <h1>Hi people</h1>
  //       <p>Welcome to your new Gatsby site.</p>
  //       <p>Now go build something great.</p>
  //       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //       </div>
  //       <Link to="/page-2/">Go to page 2</Link>
  //       <Link to="/posts">Go to posts</Link>
  //       <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
  //       {data.allMarkdownRemark.edges.map(({ node }: any) => (
  //         <div key={node.id}>
  //           <Link to={node.fields.slug}>
  //             <h3>
  //               {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
  //             </h3>
  //             <p>{node.excerpt}</p>
  //           </Link>
  //         </div>
  //       ))}
  //     </Layout>
  // );
};

export default IndexPage;
