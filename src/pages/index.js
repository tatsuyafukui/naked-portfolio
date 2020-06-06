import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import IndexTemplate from "../components/Templates/IndexTemplate";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mainImage: file(relativePath: { eq: "main.jpg" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <IndexTemplate topImage={data.mainImage.childImageSharp.fixed} />;
};

export default IndexPage;
