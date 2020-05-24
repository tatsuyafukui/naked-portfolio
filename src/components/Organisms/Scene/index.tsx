import {FontSize, Level} from "../../../constants";
import React from "react";
import Txt, {InfoTxt} from "../../Atoms/Txt";
import Heading from "../../Atoms/Heading";
import Img from "gatsby-image";
import {graphql, useStaticQuery, Link} from "gatsby";
import style from "./style.module.scss";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const Scene: React.FC<any>  = (props) => {
		const data = useStaticQuery(graphql`				
      query {
          sceneImage:file(relativePath: {eq: "about/scene.png"}) {
              childImageSharp{
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
      }
		`);

		console.log(props.skills)

		return (
				<div>
						<div className={style.title}>
								<InfoTxt>Home > シーン1</InfoTxt>
								<Heading level={Level.h1}>Webページを作れるようになろう</Heading>
						</div>
						<div className={style.visual}>
								<div>
										<Img fluid={data.sceneImage.childImageSharp.fluid} />
								</div>
						</div>
						<div className={style.body}>
								<div className={style.description}>
										<Txt>
												私たちはこれまで多くのWebページを見てきました。スタイリッシュなページや、見やすいページに出会うたびに「自分だけのWebページを作ってみたい。」と思いながらもその方法は漠然としていました。
												<br/>
												<br/>
												インターネットは世界につながっています。
												Webページを作って公開する事で、あなたの考えを世界に発信し共有する事ができます。
												ここではWebページを作成する上で基本となる技術について学びましょう。
												<br/>
												<br/>
												学び終わる頃には、使ってみたい開発環境や作りたいWebページのイメージが膨らむ事でしょう。
										</Txt>
								</div>
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


