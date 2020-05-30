import { Level } from '../../../constants';
import React from 'react';
import { InfoTxt } from '../../Atoms/Txt';
import Heading from '../../Atoms/Heading';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import style from './style.module.scss';
import MediaObjectLayout from '../../Atoms/MediaObjectLayout';

interface IProps {
  scenes: any;
}

const SceneList: React.FC<IProps> = props => {
  // return (
  // 		<div className={style.root}>
  // 				{props.scenes.map((scene: any) => (
  // 						<Link key={scene.node.id} to={scene.node.fields.slug}>
  // 								<MediaObjectLayout>
  // 										<div>
  // 												<Img
  // 														fixed={scene.node.frontmatter.icon.childImageSharp.fixed}
  // 														backgroundColor
  // 												/>
  // 										</div>
  // 										<div style={{padding: "32px"}}>
  // 												<Heading level={Level.h3}>シーン{scene.node.frontmatter.sceneId}</Heading>
  // 												<Heading level={Level.h2}>{scene.node.frontmatter.title}</Heading>
  // 												<InfoTxt>詳細を見る</InfoTxt>
  // 										</div>
  // 								</MediaObjectLayout>
  // 						</Link>
  // 				))}
  // 		</div>
  // )

  return (
    <div className={style.root}>
      {props.scenes.map((scene: any) => (
        <Link key={scene.id} to={scene.link}>
          <MediaObjectLayout>
            <div>
              <Img fixed={scene.image} backgroundColor />
            </div>
            <div style={{ padding: '32px' }}>
              <Heading level={Level.h3}>{scene.id}</Heading>
              <Heading level={Level.h2}>{scene.title}</Heading>
              <InfoTxt>{scene.linkText}</InfoTxt>
            </div>
          </MediaObjectLayout>
        </Link>
      ))}
    </div>
  );
};

export default SceneList;
