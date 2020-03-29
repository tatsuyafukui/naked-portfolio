import React, {MouseEvent, useState} from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import {IconName, ImageName, Level} from '../../../constants';
import Txt from "../../Atoms/Txt";
import LetsProgateCard from "../../Molecules/LetsProgateCard";
import {Link} from "gatsby";
import Icon from "../../Atoms/Icon";

const LetsStartProgate: React.FC = props => {

		const list = [
				{
						id: 'slide0',
						heading: 'Ruby on Railsパス',
						content: '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
						image: ImageName.milestoneImage,
				},
				{
						id: 'slide1',
						heading: 'Node.jsパス',
						content: '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
						image: ImageName.pathNodeImage,
				},
				{
						id: 'slide2',
						heading: 'HTML&CSSコース',
						content: '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
						image: ImageName.milestoneImage,
				},
		]

		const [slideValue, setSlideValue] = useState(0);

		const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {

		};

		const clickNextHandler = (event: MouseEvent<HTMLAnchorElement>) => {
				const nextIndex = slideValue+1;
				setSlideValue(nextIndex)
		};

		const clickPrevHandler = (event: MouseEvent<HTMLAnchorElement>) => {
				const prevIndex = slideValue-1;
				setSlideValue(prevIndex)
		};

		return (
				<section className={style.root}>
						<div>
								<Heading level={Level.h1}>とりあえずProgateで始めてみる</Heading>
								<Txt>
										最初から目標をもつ必要はありません。大事なのはあなたの好奇心です。
										少しでも興味をもったのなら、プログラミングという新しい世界に触れてみませんか？
										Progateでは初心者でも安心して学習できる環境を用意してあなたをお待ちしております。
								</Txt>
						</div>

						<div style={{position: "relative"}}>
								{slideValue > 0 ? (
										<Link
												className={[style.btn, style.prevButton].join(' ')}
												onClick={clickPrevHandler}
												to={`#slide${slideValue-1}`}
										>
												<Icon iconName={IconName.rightTriangle} />
										</Link>
								): null}
								{slideValue < list.length-1 ? (
										<Link
												className={[style.btn, style.nextButton].join(' ')}
												onClick={clickNextHandler}
												to={`#slide${slideValue+1}`}
										>
												<Icon iconName={IconName.rightTriangle} />
										</Link>
										) :null}
								<div>
								</div>
								<div className={style.slider}>
										{list.map(item => {
												return (
														<LetsProgateCard
																key={item.id}
																id={item.id}
																className={style.slide}
																heading={item.heading}
																content={item.content}
																image={item.image}
														/>
												);
										})}
								</div>
						</div>
						<br/>
						<br/>


				</section>
		);
};

export default LetsStartProgate;
