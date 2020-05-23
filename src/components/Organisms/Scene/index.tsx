import {FontSize, Level} from "../../../constants";
import React from "react";
import Txt, {InfoTxt} from "../../Atoms/Txt";
import Heading from "../../Atoms/Heading";
import Img from "gatsby-image";
import {graphql, useStaticQuery} from "gatsby";
import style from "./style.module.scss";
import MediaObjectLayout from "../../Atoms/MediaObjectLayout";

const Scene = () => {
		const data = useStaticQuery(graphql`				
      query {
          sceneImage:file(relativePath: {eq: "about/scene.png"}) {
              childImageSharp{
                  fluid {
                      ...GatsbyImageSharpFluid_withWebp
                  }
              }
          }
          skillImage:file(relativePath: {eq: "icon/skill.png"}) {
              childImageSharp{
                  fixed(width: 70, height: 70) {
                      ...GatsbyImageSharpFixed
                  }
              }
          }
      }
		`);

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
										<MediaObjectLayout className={style.mediaObjectLayout}>
												<div>
														<Img fixed={data.skillImage.childImageSharp.fixed} />
												</div>
												<div className={style.skillText}>
														<Txt fontSize={FontSize.l}>
																HTML/CSS
														</Txt>
														<div>></div>
												</div>
										</MediaObjectLayout>
										<MediaObjectLayout className={style.mediaObjectLayout}>
												<div>
														<Img fixed={data.skillImage.childImageSharp.fixed} />
												</div>
												<div className={style.skillText}>
														<Txt fontSize={FontSize.l}>
																HTML/CSS
														</Txt>
														<div>></div>
												</div>
										</MediaObjectLayout>
										<MediaObjectLayout className={style.mediaObjectLayout}>
												<div>
														<Img fixed={data.skillImage.childImageSharp.fixed} />
												</div>
												<div className={style.skillText}>
														<Txt fontSize={FontSize.l}>
																HTML/CSS
														</Txt>
														<div>></div>
												</div>
										</MediaObjectLayout>
										<MediaObjectLayout className={style.mediaObjectLayout}>
												<div>
														<Img fixed={data.skillImage.childImageSharp.fixed} />
												</div>
												<div className={style.skillText}>
														<Txt fontSize={FontSize.l}>
																HTML/CSS
														</Txt>
														<div>></div>
												</div>
										</MediaObjectLayout>
								</div>
						</div>
				</div>
		)
};

export default Scene;


