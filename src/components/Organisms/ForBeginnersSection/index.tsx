import React from 'react';
import style from './style.css';
import Heading from '../../Atoms/Heading';
import { IconName, Level } from '../../../constants';
import Txt from '../../Atoms/Txt';
import Icon from '../../Atoms/Icon';

const ForBeginnersSection: React.FC = props => {
  return (
    <section className={`${style.root}`}>
      <Heading level={Level.h1}>初めての方へ</Heading>
      <Txt>
        Web開発ロードマップとは、あなたが目的に向かって迷わず学習を進めていくためのロードマップです。
        <br />
        下記ような方たちにおすすめです。
      </Txt>

      <div className={style.recommendBlock}>
        <ul>
          <li>
            <Icon iconName={IconName.goal} />
            <Txt>プログラミング学習の目標を立てたい方</Txt>
          </li>
          <li>
            <Icon iconName={IconName.stairs} />
            <Txt>次に何を学べば良いか/教えれば良いかを決めたい方</Txt>
          </li>
          <li>
            <Icon iconName={IconName.light} />
            <Txt>１つ１つの学びの意味をはっきりとさせたい方</Txt>
          </li>
          <li>
            <Icon iconName={IconName.test} />
            <Txt>今まで学んできたことが身についているか確認したい方</Txt>
          </li>
        </ul>
      </div>
      <Txt className={style.txt}>
        ここでは、ロードマップを最大限活用していただくためのロードマップの使い方を紹介をします。
      </Txt>
    </section>
  );
};

export default ForBeginnersSection;
