import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import Heading from '../../components/Atoms/Heading';
import { ImageName, Level } from '../../constants';
import Image from '../../components/Atoms/Img';
import Txt from '../../components/Atoms/Txt';

const CreateWebPage = () => {
  return (
    <Layout>
      <SEO title="Milestone Detail" />
      <aside>
        <ul>
          <li>マイルストーンの説明</li>

          <li>HTML/CSS基礎</li>
          <li>JavaScript基礎</li>
          <li>開発者ツール</li>
          <li>エディタ</li>
          <li>ブラウザ</li>
          <li>ターミナル</li>
        </ul>
        <ul>
          <li>学習の手引き</li>
          <li>学習方法ブログ</li>
          <li>みんなからの質問</li>
        </ul>
      </aside>
      <Heading level={Level.h1}>Webページを作れるようになろう</Heading>

      <main>
        <Heading level={Level.h2}>マイルストーンの説明</Heading>
        <Image imageName={ImageName.milestoneImage} />
        <div>
          <Heading level={Level.h4}>概要</Heading>
          <Txt>Webページを作るページです</Txt>
        </div>
        <div>
          <Heading level={Level.h4}>学ぶ目的</Heading>
          <Txt>
            プログラミングを学ぶと何ができるように何でしょうか？
            新しいことを始めるときはだれもが初心者です。今は目指す遠い目標までの道のりは定かではないかもしれません。プログラミング学習の１歩目のあなたに必要なのは、プログラミングの楽しさに気づくことです。なぜなら、変化の多いこの世界では、この先も学び続けたいと思える方が重要だからです。
            このマイルストーンを終えるとプログラミングの可能性や作る体験を通して楽しさに気づけるかもしれません。
            そして、楽しいと思えたなら改めて目標を立ててみましょう。
          </Txt>
        </div>
        <div>
          <Heading level={Level.h4}>全体像をつかむには</Heading>
          <Txt>
            プログラミングを学ぶと何ができるように何でしょうか？
            新しいことを始めるときはだれもが初心者です。今は目指す遠い目標までの道のりは定かではないかもしれません。プログラミング学習の１歩目のあなたに必要なのは、プログラミングの楽しさに気づくことです。なぜなら、変化の多いこの世界では、この先も学び続けたいと思える方が重要だからです。
            このマイルストーンを終えるとプログラミングの可能性や作る体験を通して楽しさに気づけるかもしれません。
            そして、楽しいと思えたなら改めて目標を立ててみましょう。
          </Txt>
          <a href={'#'}>参考資料</a>
        </div>
        <div>
          <Heading level={Level.h4}>学習の目安</Heading>
          <Txt>
            ・プログラミングが動くことを楽しいと思えたか ・プログラミングに必要なツールを自分の環境に用意できたか
            ・実際にWebサイトを作って公開できたか ・他のWebサイトを模写できたか
          </Txt>
        </div>
      </main>
    </Layout>
  );
};

export default CreateWebPage;
