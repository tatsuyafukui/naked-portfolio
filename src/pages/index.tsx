import React, { useState } from 'react';

import { graphql, Link, useStaticQuery } from 'gatsby';
import { ImageName } from '../constants';

import Layout from '../components/Templates/Layout';
import SEO from '../components/seo';
import MilestoneList from "../components/Organisms/MilestoneList";
import CreativeSection from "../components/Molecules/CreativeSection";
import RocketSection from "../components/Molecules/RocketSection";

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
        content={'自分や誰かのために考えたことを形にし、世の中に出そう。\n' +
        '様々な職種の人とともに価値を生み出せる人になろう。'}
      />
      <RocketSection
        heading={'夢に向かって飛び立とう'}
        content={'夢への道は人それぞれ。可能性を広げる道はアナタ次第。\n' +
        'これまで学んだことを自信に変えて飛び立ちましょう！'}
      />
      <MilestoneList/>
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
