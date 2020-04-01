import React from 'react';
import style from './style.css';
import Heading from '../../components/Atoms/Heading';
import { IconName, Level } from '../../constants';
import Txt from '../../components/Atoms/Txt';
import Icon from '../../components/Atoms/Icon';
import Section from '../../components/Atoms/Section';

const ForBeginnersSection: React.FC = props => {
  return (
    <Section>
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
      <Txt>
        ここでは、ロードマップを最大限活用していただくためのロードマップの使い方を紹介をします。
      </Txt>
    </Section>
  );
};

export default ForBeginnersSection;
