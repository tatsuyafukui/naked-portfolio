import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../Layout';
import SEO from '../seo';
import Img from 'gatsby-image';
import style from './SkillTemplate.module.scss';
import {InfoTxt} from "../Atoms/Txt";
import Heading from "../Atoms/Heading";
import {Level} from "../../constants";
import MediaObjectLayout from "../Atoms/MediaObjectLayout";

/**
	* マークダウンを読み込んでPageを作成するテンプレート
	* @param data
	* @constructor
	*/
const SkillTemplate = ({ data }: any) => {
		const skill = data.markdownRemark;
		let icon = skill.frontmatter.icon.childImageSharp.fluid;

		console.log(skill);

		return (
				<Layout>
						<SEO title={skill.frontmatter.title} description={skill.excerpt} />
						<div className={style.container}>
									<div className={style.titleHeader}>
											<InfoTxt
													className={style.menu}
											>
													Home > 1. Webページを作れるようになろう > {skill.frontmatter.title}
											</InfoTxt>
											<div className={style.title}>
													<span>
															<Img fluid={icon} />
													</span>
													<Heading level={Level.h1}>
															{skill.frontmatter.title}
													</Heading>
											</div>
									</div>
								<div className={style.body}>
										<div dangerouslySetInnerHTML={{ __html: skill.html }} />
										<div className={style.recommend}>
												<MediaObjectLayout>
														<div></div>
														<div></div>
												</MediaObjectLayout>
										</div>
								</div>
						</div>
				</Layout>
		);
};
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
																date
                icon {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            excerpt
        }
    }
`;

export default SkillTemplate;
