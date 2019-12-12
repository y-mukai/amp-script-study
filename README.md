# amp-script-study
amp-scriptの練習

## 環境
`npm run json` でjsonサーバー立ち上げ  
`npm run dev` で開発サーバー立ち上げ

## ディレクトリ構成
```
├── _dev 開発フォルダ
│   ├── html
│   ├── css コンパイル中に生成される一時ファイル
│   ├── js
│   └── json
└── src 本番フォルダ
    └── assets
        ├── img
        └── js
```

### ドキュメント
||||
|---|---|---|---|
|概要|https://amp.dev/documentation/components/amp-script/|[日本語](https://y-mukai.github.io/amp-script-study/amp-script.html)|
|ルール|https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript/|[日本語](https://y-mukai.github.io/amp-script-study/custom-javascript.html)|
|解説付き例<br>(ログイン)|https://amp.dev/documentation/guides-and-tutorials/develop/custom-javascript-tutorial/||
|サンプル置き場|https://github.com/ampproject/amphtml/tree/master/examples/amp-script||

### amp-scriptじゃないドキュメント
||||
|---|---|---|---|
|ログインフロー|amp-access, amp-form|https://amp.dev/documentation/guides-and-tutorials/develop/login_requiring/|
|EC|amp-bind|https://amp.dev/documentation/guides-and-tutorials/develop/interactivity/|

### Qiita参考ドキュメント
[【AMP】amp-listで取得したデータをamp-bindを使ってリアルタイムにフィルタリングする](https://qiita.com/kingpanda/items/d086aa5cdb4a8dae43be)
```
<button on="tap:AMP.setState({isSelectA: !isSelectA })" [class]="isSelectA ? 'on' : ''">
<button on="tap:AMP.setState({isSelectB: !isSelectA })" [class]="isSelectB ? 'on' : ''">
<amp-list id="list" src="https://localhost:3002/list" layout="responsive"  width="375" height="400" [src]="'https://localhost:3002/list?' + (btnNosmoke ? '&a=1' : '') + (btnOutbath ? '&b=1' : '')">
```