import React from 'react'
import {storiesOf} from '@storybook/react'
import TextTruncate from './index'

storiesOf('Atoms/TextTruncate', module)
  .add('Default', () => (
    <div style={{width: '300px', height: '100px'}}>
      <p>
        <TextTruncate>
          「自分だけのWebページを作ってみたい。」そう思ったことはありませんか。このシーンでは、Webページを作るために必要なスキルを説明しています。
          学習を始めたばかりのころは、見慣れない文法や知らない単語が多く、難しいと感じることもあるかもしれません。しかし、基礎的なスキルから着実に学んでいけば、きっと作れるようになります。まずはシンプルなレイアウトのWebページを作れるようになりましょう。
          このシーンのスキルを学び終えたとき、あなたはWebページの作成と公開ができるようになっています。Webページが公開されるその日を、私たちは楽しみにしています。
        </TextTruncate>
      </p>
    </div>
  ))
  .add('Open is true', () => (
    <div style={{width: '300px', height: '100px'}}>
      <TextTruncate open={true}>
        「自分だけのWebページを作ってみたい。」そう思ったことはありませんか。このシーンでは、Webページを作るために必要なスキルを説明しています。
        学習を始めたばかりのころは、見慣れない文法や知らない単語が多く、難しいと感じることもあるかもしれません。しかし、基礎的なスキルから着実に学んでいけば、きっと作れるようになります。まずはシンプルなレイアウトのWebページを作れるようになりましょう。
        このシーンのスキルを学び終えたとき、あなたはWebページの作成と公開ができるようになっています。Webページが公開されるその日を、私たちは楽しみにしています。
      </TextTruncate>
    </div>
  ))
  .add('truncateText is "read more"', () => (
    <div style={{width: '300px', height: '100px'}}>
      <TextTruncate truncateText={'続きを読む'}>
        「自分だけのWebページを作ってみたい。」そう思ったことはありませんか。このシーンでは、Webページを作るために必要なスキルを説明しています。
        学習を始めたばかりのころは、見慣れない文法や知らない単語が多く、難しいと感じることもあるかもしれません。しかし、基礎的なスキルから着実に学んでいけば、きっと作れるようになります。まずはシンプルなレイアウトのWebページを作れるようになりましょう。
        このシーンのスキルを学び終えたとき、あなたはWebページの作成と公開ができるようになっています。Webページが公開されるその日を、私たちは楽しみにしています。
      </TextTruncate>
    </div>
  ))
  .add('truncateText is JSX', () => (
    <div style={{width: '300px', height: '100px'}}>
      <TextTruncate truncateText={<button>続きを読む</button>}>
        「自分だけのWebページを作ってみたい。」そう思ったことはありませんか。このシーンでは、Webページを作るために必要なスキルを説明しています。
        学習を始めたばかりのころは、見慣れない文法や知らない単語が多く、難しいと感じることもあるかもしれません。しかし、基礎的なスキルから着実に学んでいけば、きっと作れるようになります。まずはシンプルなレイアウトのWebページを作れるようになりましょう。
        このシーンのスキルを学び終えたとき、あなたはWebページの作成と公開ができるようになっています。Webページが公開されるその日を、私たちは楽しみにしています。
      </TextTruncate>
    </div>
  ))
