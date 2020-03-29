import React from 'react';

import Layout from '../components/Templates/Layout';
import SEO from '../components/seo';
import ForBeginnersSection from '../components/Organisms/ForBeginnersSection';
import HowToUseSection from '../components/Organisms/HowToUseSection';
import { ImageName } from '../constants';
import LsetsStartSection from '../components/Organisms/LetsStartSection';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <ForBeginnersSection />
      <HowToUseSection
        list={[
          {
            id: 'goal',
            heading: '目標を立てよう',
            image: ImageName.goalImage,
            content:
              'ロードマップは創れる人を目指したにんじゃわんこのストーリーで学習項目が並んでいます。あなたにとっての創れる人とはどんな人でしょうか？少し時間をかけて目標となるイメージ固めましょう。これから学んでいくことは全てその目標に繋がっていきます。',
          },
          {
            id: 'select-milestone',
            heading: 'マイルストーンを選ぼう',
            image: ImageName.selectMilestoneImage,
            content:
              'プロダクトを公開するには責任が伴います。目標に対してあなたはどの位置にいるでしょうか？ロードマップでは７つのマイルストーンが用意されています。この中で一番あなたに近いマイルストーンの達成を目指しましょう！',
          },
          {
            id: 'around',
            heading: 'マイルストーンの全体像を把握しよう',
            image: ImageName.aroundImage,
            content:
              '１つのマイルストーンでも学ぶことは膨大です。何を学ぶかは、あなたの目的によって変わります。そのために、まずは全体像を把握しましょう。全体像が分かれば、優先度を付けられるようになります。',
          },
          {
            id: 'why',
            heading: '学ぶ理由を明確にしよう',
            image: ImageName.whyImage,
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
            image: ImageName.outputImage,
            content:
              '知識を定着させるためにアウトプットは重要です。この際に「人に教えられる」状態になることを意識すると効果的です。「学習の目安」をあなたの言葉やコードで表現できるようになれば「学習できた！」と自信を持って言えるはずです。',
          },
          {
            id: 'deep-learn',
            heading: '何故？どうやって？を大事にしよう',
            image: ImageName.deepLearnImage,
            content:
              '学習には好奇心が欠かせません。「何故こうなっているんだろう？」「どういう仕組みなんだろう？」と気になったことがあれば積極的に寄り道をしましょう。自らの疑問をもとに学んだ知識は強い記憶となります。寄り道しすぎて迷った時はロードマップをみて目標や学ぶ理由を思い出しましょう。',
          },
        ]}
      />
      <LsetsStartSection />
    </Layout>
  );
};

export default AboutPage;
