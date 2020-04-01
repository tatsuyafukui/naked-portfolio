import React, { MouseEvent, useMemo, useState } from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { IconName, ImageName, Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import LetsProgateCard from '../../Molecules/IntroductionCard';
import { Link } from 'gatsby';
import Icon from '../../Atoms/Icon';
import Section from '../../Atoms/Section';

const ProgateIntroduction: React.FC = () => {

  const [slideValue, setSlideValue] = useState(0);

  const clickNextHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const nextIndex = slideValue + 1;
    setSlideValue(nextIndex);
  };

  const clickPrevHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    const prevIndex = slideValue - 1;
    setSlideValue(prevIndex);
  };

  const list = [
    {
      id: 'slide0',
      heading: 'Ruby on Railsパス',
      content:
        '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
      image: ImageName.milestoneImage,
      link: 'https://prog-8.com/paths/rails',
    },
    {
      id: 'slide1',
      heading: 'Node.jsパス',
      content:
        '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
      image: ImageName.pathNodeImage,
      link: 'https://prog-8.com/languages/nodejs',
    },
    {
      id: 'slide2',
      heading: 'HTML&CSSコース',
      content:
        '初心者からRuby on RailsでWebアプリケーションを創れるようになるまでの道のり(path)をサポートします。一緒にプログラミングをはじめませんか？',
      image: ImageName.milestoneImage,
      link: 'https://prog-8.com/languages/html',
    },
  ];

  return (
    <Section>
      <div>
        <Heading level={Level.h1}>とりあえずProgateで始めてみる</Heading>
        <Txt>
          最初から目標をもつ必要はありません。大事なのはあなたの好奇心です。
          少しでも興味をもったのなら、プログラミングという新しい世界に触れてみませんか？
          Progateでは初心者でも安心して学習できる環境を用意してあなたをお待ちしております。
        </Txt>
      </div>

      <div style={{ position: 'relative' }}>
        {slideValue > 0 ? (
          <Link
            className={[style.btn, style.prevButton].join(' ')}
            to={`/#slide${slideValue - 1}`}
            onClick={clickPrevHandler}
          >
            <Icon iconName={IconName.left} />
          </Link>
        ) : null}
        {slideValue < list.length - 1 ? (
          <Link
            className={[style.btn, style.nextButton].join(' ')}
            to={`/#slide${slideValue + 1}`}
            onClick={clickNextHandler}
          >
            <Icon iconName={IconName.rightTriangle} />
          </Link>
        ) : null}
        <div className={style.slider}>
          {list.map(item => {
            return (
              <a
                id={item.id}
                key={item.id}
                href={item.link}
                target={'_blank'}
                className={`${style.slide} ${style.link}`}
              >
                <LetsProgateCard
                  heading={item.heading}
                  content={item.content}
                  image={item.image}
                />
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ProgateIntroduction;
