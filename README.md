# 環境構築

## 前提条件

- Docker のインストール
- github のアカウント作成

## 手順

Mac や Windows の場合はインストールした Docker アプリが起動していることを確認してから下記の手順に進んでください

### ソースのクローン

```shell script
git clone git@github.com:Progate/journey.git
```

### docker image 作成

```shell script
docker image build -t node12.18.0:gatsby .
```

### docker container 起動

```shell script
docker container run --rm -it --name gatsby_app -v $PWD:/usr/src/app -p 8000:8000 -p 6006:6006 -p 9000:9000 node12.18.0:gatsby
```

`#`で始まるターミナルになっていたら成功

### package install

起動した docker container 内でパッケージをインストール

```shell script
yarn install
```

`node_modules`が作成されてたら成功

### app 起動

```shell script
yarn start
```

`http://localhost:8000/` にアクセスして画面が表示されたら成功

## Storybook 起動

上記の docker で構築している場合は Docker 内でコマンド実行

```shell script
docker container exec -it gatsby_app yarn storybook
```

`http://localhost:6006/` にアクセスして画面が表示されたら成功

## Jest 起動

上記の docker で構築している場合は Docker 内でコマンド実行
`*test.js`ファイルのテストが実行される

```shell script
docker container exec -it gatsby_app yarn test
```

コードの変更のたびに自動テスト実行する watch は

```shell script
docker container exec -it gatsby_app yarn test-watch
```
