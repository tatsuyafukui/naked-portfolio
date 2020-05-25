import {FontSize} from "../../../constants";
import React from "react";
import Txt from "../../Atoms/Txt";
import Img from "gatsby-image";
import {Link} from "gatsby";
import style from "./style.module.scss";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

interface IProps {
		skills: any
}

const SkillList: React.FC<IProps>  = (props) => {
		return (
				<div>
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
		)
};

export default SkillList;


