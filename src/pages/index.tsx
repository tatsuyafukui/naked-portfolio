import React from "react"

import {graphql, Link, useStaticQuery} from "gatsby"

import Layout from "../components/Templates/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt
            timeToRead
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/posts">Go to posts</Link>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
          >
          <h3>
            {node.frontmatter.title}{" "}
            <span>
                — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage
