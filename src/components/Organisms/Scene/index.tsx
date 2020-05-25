import {FontSize, Level} from "../../../constants";
import React from "react";
import Txt, {InfoTxt} from "../../Atoms/Txt";
import Heading from "../../Atoms/Heading";
import Img from "gatsby-image";
import {graphql, useStaticQuery, Link} from "gatsby";
import style from "./style.module.scss";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const Scene: React.FC<any>  = (props) => {
		return (
				<div>
						<div className={style.title}>
								<InfoTxt>Home > シーン{props.order}</InfoTxt>
								<Heading level={Level.h1}>{props.title}</Heading>
						</div>
						<div className={style.visual}>
								<div>
										<Img fluid={props.image} />
								</div>
						</div>
						<div className={style.body}>
								<div className={style.description} dangerouslySetInnerHTML={{ __html: props.body }} />
								<div className={style.skill}>
										<Heading level={Level.h5}>必要なスキル</Heading>
										{/* スキルリストのcomponent化 */}
										{props.skills.map((skill: any) => (
												<Link
														key={skill.node.id}
														to={skill.node.fields.slug}
												>
														<MediaObjectLayout className={style.mediaObjectLayout}>
																<div>
																		<Img fixed={skill.node.frontmatter.icon.childImageSharp.fixed} />
																</div>
																<div className={style.skillText}>
																		<Txt fontSize={FontSize.l}>
																				{skill.node.frontmatter.title}
																		</Txt>
																		<div>></div>
																</div>
														</MediaObjectLayout>
												</Link>
										))}
								</div>
						</div>
				</div>
		)
};

export default Scene;


