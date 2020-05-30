# setup

## Docker

### image build

```$xslt
docker image build -t node12.16.1:gatsby .
```

### 起動

```.env
docker container run --rm -it --name gatsby_app -v プロジェクトパス:/usr/src/app --network node_node_app_net --ip 172.25.0.10 -p 8000:8000 -p 9000:9000 -p 6006:6006 node12.16.1:gatsby
```

docker のネットワーク作っていない場合は下のコマンド消す
IP ではアクセスできなくなる
`--network node_node_app_net --ip 172.25.0.10`

### 確認

成功していたら gatsby_app が表示される

```$xslt
docker container ls
```

### アクセス

```$xslt
localhost:8000
```

## CSS ツール

typescript だと CSS のインポートにも型定義が必要です。
手動で作るのが面倒な場合は[この記事のツール入れておくと便利](https://qiita.com/Quramy/items/a5d8967cdbd1b8575130)

```$xslt
tcm -p src/**/*.scss
```

## yarn scripts

Docker のコンテナ経由でコマンド実行する

### package install

```$xslt
docker container exec -it gatsby_app yarn install
```

### Storybook 起動

```$xslt
docker container exec -it gatsby_app yarn storybook
```

### test 起動

```$xslt
docker container exec -it gatsby_app yarn test
```

### test 監視

```$xslt
docker container exec -it gatsby_app yarn test-watch
```

### lint 修正

```$xslt
docker container exec -it gatsby_app yarn format
```
