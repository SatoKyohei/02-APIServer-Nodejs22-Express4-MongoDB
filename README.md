## 写経

[サルでも分かる Express での jsonAPI サーバーの作り方](https://qiita.com/ngmr_mo/items/73cc7160d002a4989416)

<br/>
<br/>

## 成果物

MongoDB を使った API サーバ

<br/>
<br/>

## 技術スタック

-   Node.js v22
-   Express v4
-   MongoDB

<br/>
<br/>

## 実行したコマンド（順不同）

-   npm install express
-   npm install mongodb
-   npm install mongoose
-   npm install body-parser
-   npm install moment
-   npm install dotenv
-   npx nodemon app/app.js

<br/>
<br/>

## 学べる点

-   ルーティング
-   ローカルの Express サーバからクラウドの MongoDB への接続
-   MongoDB を使った CRUD

<br/>
<br/>

## 使用した外部サービス

-   [クラウドの MongoDB](https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2&nextHash=%23org%2F67383a89cb0e5750d095c927%2F&signedOut=true)
    -   [【完全版】MongoDB Cloud 　(アカウント登録から EXPRESS サーバからの接続まで)](https://reffect.co.jp/node-js/mongodb-cloud)の記事通りにやれば MongoDB 構築できる。ただ、IP 設定上手くいかなかったので、0.0.0.0/0 を追加したらいけた。セキュリティ的にはアウトだが、勉強でしか使ってないので問題ない。（今は削除済み）

<br/>
<br/>

## 他

-   article の CRUD は上手くいかなかった。未解決。user の方はすべてうまくいってる
-   この記事通りにやっても`sudo mongod --dbpath /var/db/mongo/` はできないので注意。
    -   npm install では MongoDB のライブラリ（？）を入れただけに過ぎず、MongoDB 本体を入れたわけではないから。
    -   つまり、記事には記載されてないが、別途 MongoDB 本体をインストールする必要がある。ただ、自分の PC 環境（MacbookAir M3）だと何度インストールしても起動時と接続時にエラーが出るため、ローカルでの MongoDB 構築は諦めて前述のクラウドの MongoDB を使用。
    -   この方法でやる場合、`sudo mongod --dbpath /var/db/mongo/`は実行不要。また、変化点としては app.js のみ。他のファイルは記事の通りで OK
