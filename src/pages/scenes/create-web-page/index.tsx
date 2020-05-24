import React from 'react';
import SEO from '../../../components/seo';
import SceneTemplate from '../../../components/Templates/SceneTemplate';
import Scene from '../../../components/Organisms/Scene';
import {graphql, useStaticQuery} from "gatsby";


const CreateWebPage = () => {
		const data = useStaticQuery(graphql`
      query MyQuery {
          allMarkdownRemark(filter: {fields: {slug: {regex: "/scenes/create-web-page/skills/"}}}) {
              edges {
                  node {
                      id
                      frontmatter {
                          title
                          icon {
                              childImageSharp {
                                  fixed(height: 500) {
                                      ...GatsbyImageSharpFixed_withWebp_tracedSVG
                                  }
                              }
                          }
                      }
                      fields {
                          slug
                      }
                  }
              }
          }
      }
		`);
		return (
				<SceneTemplate
						skills={data.allMarkdownRemark.edges}
				/>
		);
};

export default CreateWebPage;
