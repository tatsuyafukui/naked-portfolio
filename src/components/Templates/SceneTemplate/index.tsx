import React from 'react';
import {SceneLayout} from '../../Layout';
import {graphql, useStaticQuery} from "gatsby";
import SEO from "../../seo";
import Scene from "../../Organisms/Scene";

interface IProps {
		data: any
}

const SceneTemplate: React.FC<IProps> = ({data}) => {
		const scene = data.markdownRemark;
		const skills = data.allMarkdownRemark.edges;

		return (
				<SceneLayout>
						<SEO title={scene.frontmatter.title} description={scene.excerpt}/>
						<Scene
								skills={skills}
								sceneId={scene.frontmatter.sceneId}
								title={scene.frontmatter.title}
								image={scene.frontmatter.icon.childImageSharp.fluid}
								body={scene.html}
						/>
				</SceneLayout>
		);
};

export default SceneTemplate;


/**
	* md file から生成するので、このTemplateファイルがPagesの役割を果たしている
	**/
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
                sceneId
            }
            excerpt
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
