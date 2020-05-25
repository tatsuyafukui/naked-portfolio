import React from 'react';
import PropTypes from 'prop-types';
import {SceneLayout} from '../../Layout';
import {graphql, useStaticQuery} from "gatsby";
import SEO from "../../seo";
import Scene from "../../Organisms/Scene";
import Img from 'gatsby-image';

const SceneTemplate: React.FC<any> = ({data}) => {
		const scene = data.markdownRemark;
		const skills = data.allMarkdownRemark.edges;

		let icon = scene.frontmatter.icon.childImageSharp.fluid;

		return (
				<SceneLayout>
						<SEO title={scene.frontmatter.title} />
						<Scene
								skills={skills}
								order={scene.frontmatter.order}
								title={scene.frontmatter.title}
								image={icon}
								body={scene.html}
						/>
				</SceneLayout>
		);
};

export default SceneTemplate;

export const query = graphql`
    query($slug: String!, $sceneId: Int!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                icon {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
																order
            }
        }
        allMarkdownRemark(
												sort: { fields: [frontmatter___order], order: ASC },
												filter: {
																frontmatter: {
                    sceneId: {eq: $sceneId}, type: {eq: "skill"}
																}
												}
								) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        icon {
                            childImageSharp {
                                fixed(height: 70) {
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
`;
