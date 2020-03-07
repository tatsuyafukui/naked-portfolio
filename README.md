# setup


```$xslt
docker image build -t node12.16.1:gatsby .
docker container run -itd --name gatsby_app -v プロジェクトパス:/usr/src/app -p 8000:8000 node12.16.1:gatsby
```


確認
```$xslt
docker container ls
```

アクセス
```$xslt
localhost:8000
```
