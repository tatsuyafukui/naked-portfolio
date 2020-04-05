import React from 'react';
import Heading from '../../Atoms/Heading';
import Txt from '../../Atoms/Txt';
import { AboutImage, IconName, Level } from '../../../constants';
import style from './style.module.scss';
import { PrimaryButton } from '../../Atoms/Button';
import { Link } from 'gatsby';
import Section from '../../Atoms/Section';
import Icon from '../../Atoms/Icon';
import HowToUseItem from '../../Molecules/HowToUseItem';
import HoverTipInteraction, {Tip} from "../../Atoms/HoverTipInteraction";

const About: React.FC = () => {
  const howList = [
    {
      id: 'goal',
      heading: '目標を立てよう',
      image: AboutImage.goalImage,
      content:
        'ロードマップは創れる人を目指したにんじゃわんこのストーリーで学習項目が並んでいます。あなたにとっての創れる人とはどんな人でしょうか？少し時間をかけて目標となるイメージ固めましょう。これから学んでいくことは全てその目標に繋がっていきます。',
    },
    {
      id: 'select-milestone',
      heading: 'マイルストーンを選ぼう',
      image: AboutImage.selectMilestoneImage,
      content:
        'プロダクトを公開するには責任が伴います。目標に対してあなたはどの位置にいるでしょうか？ロードマップでは７つのマイルストーンが用意されています。この中で一番あなたに近いマイルストーンの達成を目指しましょう！',
    },
    {
      id: 'around',
      heading: 'マイルストーンの全体像を把握しよう',
      image: AboutImage.aroundImage,
      content:
        '１つのマイルストーンでも学ぶことは膨大です。何を学ぶかは、あなたの目的によって変わります。そのために、まずは全体像を把握しましょう。全体像が分かれば、優先度を付けられるようになります。',
    },
    {
      id: 'why',
      heading: '学ぶ理由を明確にしよう',
      image: AboutImage.whyImage,
      content:
        '学習内容が自分にとって価値があると分かっていれば自然と意欲が湧いてくるものです。マイルストーンの項目には、「なぜ学ぶのか」が記されています。あなたの目標にどう繋がるのかを明確にできたら、項目について学び始めましょう。',
    },
    {
      id: 'how',
      heading: '学ぶ理由とスキルに合った学習方法を選ぼう',
      content:
        '「キーワード　教材」や「キーワード　学習」と調べれば色々な学習方法が出てきます。書籍や動画、ブロク、学習サービスなど複数を見比べながら学習内容の全体像を掴み、学ぶ理由とスキルに合うものを選びましょう。',
    },
    {
      id: 'output',
      heading: '言葉やコードをアウトプットしよう',
      image: AboutImage.outputImage,
      content:
        '知識を定着させるためにアウトプットは重要です。この際に「人に教えられる」状態になることを意識すると効果的です。「学習の目安」をあなたの言葉やコードで表現できるようになれば「学習できた！」と自信を持って言えるはずです。',
    },
    {
      id: 'deep-learn',
      heading: '何故？どうやって？を大事にしよう',
      image: AboutImage.deepLearnImage,
      content:
        '学習には好奇心が欠かせません。「何故こうなっているんだろう？」「どういう仕組みなんだろう？」と気になったことがあれば積極的に寄り道をしましょう。自らの疑問をもとに学んだ知識は強い記憶となります。寄り道しすぎて迷った時はロードマップをみて目標や学ぶ理由を思い出しましょう。',
    },
  ];

  return (
    <>
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
      <Section>
        <Heading level={Level.h1}>ロードマップを使った学び方</Heading>
        {howList.map(item => (
          <HowToUseItem key={item.id} {...item} />
        ))}
      </Section>
      <Section>
        <Heading level={Level.h1}>さぁ、やってみよう</Heading>
        <Txt>
          ここからは実際に使い方に沿って学んでいきましょう。
          <br />
          挫折しそうなときは、感情に流されない習慣や物事をボジティブに捉える癖を身につけたり、切磋琢磨できるコミュニティを探したりと、自分に合った学習方法や環境を知ることも大切です。
          <br />
          目標を達成できたときには、是非あなたのサクセスストーリーを教えて下さい。 Progate一同楽しみにお待ちしております。
          <br />
        </Txt>
        <div className={style.buttonContainer}>
          <Link to={'/'}>
            <PrimaryButton>学習をはじめる</PrimaryButton>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default About;
